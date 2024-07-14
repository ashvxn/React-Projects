import React, { useState, useEffect } from 'react';
import localImage from './assets/WhatsApp Image 2024-07-13 at 00.18.19_b517190d.jpg'; // Adjust the path as necessary

const imageUrls = [
    localImage,
    'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      <img src={imageUrls[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={styles.image} />
    </div>
  );
};

const styles = {
    container: {
      width: '50vw',
      height: '30vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative', // Ensure the container is positioned relatively
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Cover the container while maintaining aspect ratio
      position: 'absolute', // Make sure the image fills the container
    },
  };

export default ImageSlider;
