import React from "react";
import { useSelector } from "react-redux";
import styles from "./ProductCarousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselProduct = () => {
  const products = useSelector((state) => state.products);

  return (
    // <div className={styles.wrapper_carousel}>
    //   <div className={styles.wrapper_carousel_text}>
    //     <div>Новые предложения</div>
    //     <div>все...</div>
    //     <div className={styles.collection_wrapper}>
        <Carousel
        width={1200}
          swipeable={true}
          centerMode={true}
          infiniteLoop={true}
          showArrows={false}
          emulateTouch={true}
          showThumbs={false}
          showStatus={false}
          // swipeScrollTolerance={5}
          centerSlidePercentage={20}
          showIndicators={false}
        >
          {products.map((product) => {
            return (<div key={product.id} className={styles.item_wrapper}>
              <img
                src={product.photoUrl[0]}
                alt="item_icon"
                className={styles.item_icon}
              />
              <div className={styles.item_text}>{product.name}</div>
            </div>)
          })}
        </Carousel>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CarouselProduct;

