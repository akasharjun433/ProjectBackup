import React, { useState } from 'react';
import './FAQ.css'; // Import your CSS file

const FAQ = () => {
  const faqData = [
    {
      question: 'How do I book a flight online?',
      answer:
        'To book a flight online, visit our website, enter your travel details, including departure and destination airports, travel dates, and the number of passengers. Then, browse the available flights, select your preferred one, and follow the booking process.'
    },
    {
      question: 'What information do I need to book a flight?',
      answer:
        'You will need passenger details such as names, dates of birth, passport information, and payment details, including a valid credit or debit card.'
    },
    {
      question: 'Can I change or cancel my flight reservation?',
      answer:
        'Yes, you can change or cancel your flight reservation, but it may be subject to change fees or cancellation fees depending on the airline and fare type. Review our booking policies for more details.'
    },
    {
      question: 'What is the baggage allowance for my flight?',
      answer: 'Baggage allowance varies by airline and fare class. Please check with the airline for specific baggage policies and fees.'
    },
    {
      question: 'How can I check in for my flight?',
      answer: 'You can check in for your flight online through our website or mobile app, or at the airport kiosk or check-in counter. Please arrive at the airport well in advance of your departure time to allow for check-in and security procedures.'
    },
    {
      question: 'What do I do if my flight is delayed or canceled?',
      answer: 'In the event of a flight delay or cancellation, our customer support team will assist you in rebooking your flight and providing information on compensation, if applicable. You can also check your flight status on our website.'
    },
    {
      question: 'Is there Wi-Fi available on the plane?',
      answer: 'Wi-Fi availability varies by airline and aircraft. Some flights offer in-flight Wi-Fi for a fee, while others may provide it for free. You can check the amenities of your specific flight during the booking process.'
    },
    {
      question: 'Can I request special meals for my flight?',
      answer: 'Yes, you can request special meals such as vegetarian, vegan, gluten-free, or kosher meals when booking your flight. Be sure to make your request in advance to accommodate your dietary preferences.'
    },
    {
      question: 'What travel documents do I need for international flights?',
      answer: 'For international flights, you will typically need a valid passport and, in some cases, a visa for the destination country. It is important to check the entry requirements and visa policies of the country you are traveling to well in advance of your trip.'
    },
    {
      question: 'How can I earn frequent flyer miles?',
      answer: 'You can earn frequent flyer miles by joining an airline\'s frequent flyer program and by flying with that airline or its partner airlines. Miles can also be earned through credit card rewards programs and various promotions.'
    }
  ];

  // State to keep track of which questions are open
  const [openQuestions, setOpenQuestions] = useState([]);

  // Function to toggle the answer's visibility
  const toggleAnswer = (index) => {
    if (openQuestions.includes(index)) {
      // If the question is already open, close it
      setOpenQuestions(openQuestions.filter((item) => item !== index));
    } else {
      // If the question is closed, open it
      setOpenQuestions([...openQuestions, index]);
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions (FAQs)</h2><br/>
      {faqData.map((faq, index) => (
        <div key={index} className={`faq-item ${openQuestions.includes(index) ? 'open' : ''}`}>
          {/* Apply a CSS class to the question if it's open */}
          <div
            className="question"
            onClick={() => toggleAnswer(index)}
          >
            {faq.question}
          </div>
          {/* Show the answer if the question is open */}
          {openQuestions.includes(index) && <p className="answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
