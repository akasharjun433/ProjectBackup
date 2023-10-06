import React from 'react';
import './DestinationStyles.css';
import DestinationData from './DestinationData';

export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity</p>
      <div className="destination-content">
        <div className="description">
          <DestinationData
            heading="DUBAI"
            text="Welcome to WanderLust!! your gateway to the dazzling oasis of Dubai! As you peruse our platform, you'll be captivated by stunning images showcasing the opulence and modernity that define this remarkable city. Behold the towering Burj Khalifa, piercing the sky as the world's tallest building, and admire the luxurious Palm Jumeirah, a man-made wonder that graces the Arabian Gulf. Dubai invites you to experience its world-class shopping, indulge in its sumptuous cuisine, and bask in the splendor of its futuristic architecture. Let these alluring glimpses of Dubai's iconic landmarks ignite your wanderlust, and with just a few clicks, you can embark on your journey to this extraordinary destination. Dubai beckons, and your adventure awaits!"
          />
        </div>
        <div className="image">
          <img alt="Dubai" src="src/img/d4.jpg" />
          <img alt="Dubai" src="src/img/d5.jpg" />
        </div>
      </div>
      <div className="destination-content">
        <div className="description">
          <DestinationData
            heading="NEW YORK"
            text="Welcome to WanderLust!! your portal to the vibrant metropolis of New York City! As you explore our platform, you'll be greeted by captivating images that showcase the energy and diversity of this iconic urban hub. Behold the timeless skyline dominated by the Empire State Building, a symbol of ambition and achievement, and immerse yourself in the bustling streets of Times Square, where the city's heartbeat never misses a beat.

            New York City extends an invitation to explore its world-renowned museums, savor its diverse culinary scene, and take in the grandeur of Central Park. Let these enticing glimpses of New York's landmarks spark your wanderlust, and with just a few clicks, you can secure your flight tickets to this electrifying destination. The Big Apple beckons, and your adventure in the city that never sleeps begins here!"
          />
        </div>
        <div className="image">
          <img alt="New York" src="src/img/d1.jpg" />
          <img alt="New York" src="src/img/d6.jpg" />
        </div>
      </div>
    </div>
  );
}
