package io.iamneo.aircraft.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController //Rest API methods 
public class UserController {

    @Autowired 
    // A pipeline, which is used to access only methods
    private UserRepository userRepo;

    @CrossOrigin(origins = "http://localhost:5173")
    // Resource sharing bet two origin, which enables the proper permission for data sharing between origins.
    @PostMapping("/signup")
    public String addUser(@RequestBody User user) {
        User existingUser = userRepo.findByEmail(user.getEmail());
        if (existingUser == null) {
            userRepo.save(user);
            return "Created";
        } else {
            return "Exists";
        }
    }
    
    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/login")
    public String isUser(@RequestBody User user) {
        User existingUser = userRepo.findByEmail(user.getEmail());
        if(existingUser == null) {
        	return "Not Authorized";
       } else {
    	   if (existingUser.getPassword().equals(user.getPassword())) {
               return "Authorized";
           }
    	   return "Not Authorized";
        }
    } 
}
