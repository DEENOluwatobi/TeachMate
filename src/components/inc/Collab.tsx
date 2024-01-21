import React from 'react';

// Define the interface for the data structure
interface CollabData {
  image: string;
  title: string;
  category: string;
  rangeValue: number;
  daysUsed: number;
  totalDays: number;
  notificationNumber: number;
  friends: string[];
}

// Define the Collab component with the TypeScript interface
const Collab: React.FC = () => {
  // Sample array of collabs
  const collabs: CollabData[] = [
    {
      image: 'path/to/image1.jpg',
      title: 'Collab 1',
      category: 'Category 1',
      rangeValue: 42,
      daysUsed: 10,
      totalDays: 30,
      notificationNumber: 5,
      friends: ['friend1_1.jpg', 'friend1_2.jpg', 'friend1_3.jpg', 'friend1_4.jpg'],
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Collab 2',
      category: 'Category 2',
      rangeValue: 24,
      daysUsed: 8,
      totalDays: 25,
      notificationNumber: 3,
      friends: ['friend2_1.jpg', 'friend2_2.jpg', 'friend2_3.jpg', 'friend2_4.jpg'],
    },
  ];

  return (
    <div>
      {collabs.map((collab, index) => (
        <div key={index}>
          <img src={collab.image} alt={collab.title} />
          <h2>{collab.title}</h2>
          <p>Category: {collab.category}</p>
          <p>Range Value: {collab.rangeValue}</p>
          <p>Days Used: {collab.daysUsed}</p>
          <p>Total Days: {collab.totalDays}</p>
          <p>Notification Number: {collab.notificationNumber}</p>
          <div>
            Friends:
            {collab.friends.map((friend, friendIndex) => (
              <img key={friendIndex} src={friend} alt={`Friend ${friendIndex + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collab;
