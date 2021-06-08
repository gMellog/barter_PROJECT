import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProductCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselProduct = () => {
  const stuffArray = useSelector((state) => state.stuffArray);

  return (
    <div className={styles.wrapper_carousel}>
      <div className={styles.wrapper_carousel_text}>
        <div>Новые предложения</div>
        <div>все...</div>
        <div className={styles.collection_wrapper}>
        <Carousel
          swipeable={true}
          centerMode={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={10000}
          showArrows={true}
          emulateTouch={true}
          showThumbs={false}
          showStatus={false}
          swipeScrollTolerance={5}
          centerSlidePercentage={20}
          showIndicators={false}
        >
          {stuffArray.map((stuff) => {
            return (<div key={stuff._id} className={styles.item_wrapper}>
              <img
                src={stuff.photoUrl[0]}
                alt="item_icon"
                className={styles.item_icon}
              />
              <div className={styles.item_text}>{stuff.name}</div>
            </div>)
          })}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselProduct;

