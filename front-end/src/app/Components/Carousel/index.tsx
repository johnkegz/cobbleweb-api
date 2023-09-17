import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';

export default ({images}: {images: string[]}) => {
    return (<div className={styles.carouselContainer}>
    <Carousel
      showArrows={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {images.map((image:any, index) => (
        <div key={index}>
          <img src={image.url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
    </div>
  );
}
