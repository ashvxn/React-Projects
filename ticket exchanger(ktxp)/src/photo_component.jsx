import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import Image1 from './static/photos/IMG-20220401-WA0047.jpg';
import { useState , useEffect } from 'react'

import Image1 from './assets/photos/IMG-20220401-WA0122.jpg';
export default function DisplayAnImage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the list of image filenames from the Flask server
    fetch('http://127.0.0.1:8080/images')
      .then(response => response.json())
      .then(data => {
        // Map the filenames to URLs and set the images state
        const imageUrls = data.map(image => `http://127.0.0.1:8080/images/${image}`);
        setImages(imageUrls);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className='image_component'>
    <ImageList sx={{ width: 700, height: 630 }} cols={3} rowHeight={164}>
      {images.map((img, index) => (
        <ImageListItem key={index}>
          <img
            src={img}
            alt={`Image ${index + 1}`}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

// const [images, setImages] = useState([]);

// function get() {


//   useEffect(() => {
//     // Fetch the list of image filenames
//     fetch('http://127.0.0.1:5000/images')
//       .then(response => response.json())
//       .then(data => setImages(data))
//       .catch(error => console.error('Error fetching images:', error));
//   }, []);

 
//         images.map((image, index) => (
          
            
//             `http://127.0.0.1:5000/images/${image}` 
           
        
//         ))
     
// }
// get()

// export default function DisplayAnImage() {
//   return (
//     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
// const itemData = [images.map((images)=>{img : images})]
// const itemData = [
//   {
//     img: Image1
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];
