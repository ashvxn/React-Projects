import React, { useState, useEffect } from 'react';
// import localImage from './assets/WhatsApp Image 2024-07-13 at 00.18.19_b517190d.jpg'; // Adjust the path as necessary
import localImage2 from './assets/image2.jpeg'; // Adjust the path as necessary
import localImage3 from './assets/image3.webp'; // Adjust the path as necessary

const imageUrls = [
    localImage2,
    localImage3
    // 'https://via.placeholder.com/800x400?text=Image+3',
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
    
    <div style={styles.sliderWrapper}>
                  <iframe  src="https://open.spotify.com/embed/track/5Y6nVaayzitvsD5F7nr3DV?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

      <div style={styles.container}>
        <img src={imageUrls[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={styles.image} />
      </div>
    </div>
    
  );
};

const styles = {
  sliderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    // height: '100vh', // Full height for demonstration purposes
    margin: 7, // Remove any default margins
    padding: '18 px', // Remove any default padding
    // backgroundColor: '#f0f0f0', // Light grey background for contrast
    boxSizing: 'border-box', // Ensure padding and border are included in the element's total width and height
  },
  container: {
    width: '50vw',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle box shadow for depth
    position: 'relative', // Ensure the container is positioned relatively
    backgroundColor: '#ffffff', // White background for the slider container
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Cover the container while maintaining aspect ratio
    transition: 'opacity 1s ease-in-out', // Smooth transition between images
    position: 'absolute', // Make sure the image fills the container
  },
};

export default ImageSlider;
