import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";


const CarouselProduct = () => {
  const stuffArray = useSelector((state) => state.stuffArray);

  return (
    <React.Fragment>
      <div >
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
      ><div >
        {stuffArray.map((stuff) => {
          return (
            <SwiperSlide key={stuff.id} >
              <img
                src={stuff.photoUrl[0]}
                alt="item_icon"
              />
            </SwiperSlide>
          );
        })}
        </div>
      </Swiper>
      </div>
    </React.Fragment>
  );
};

//   return (
//     <div className={styles.wrapper_carousel}>
//       <div className={styles.wrapper_carousel_text}>
//         <div>Новые предложения</div>
//         <div>все...</div>
//         <div className={styles.collection_wrapper}>
//         <Carousel
//         width={1200}
//           swipeable={true}
//           centerMode={true}
//           autoPlay={true}
//           infiniteLoop={true}
//           interval={1000}
//           showArrows={false}
//           emulateTouch={true}
//           showThumbs={false}
//           showStatus={false}
//           swipeScrollTolerance={5}
//           centerSlidePercentage={20}
//           showIndicators={false}
//         >
//           {stuffArray.map((stuff) => {
//             return (<div key={stuff.id} className={styles.item_wrapper}>
//               <img
//                 src={stuff.photoUrl[0]}
//                 alt="item_icon"
//                 className={styles.item_icon}
//               />
//               <div className={styles.item_text}>{stuff.name}</div>
//             </div>)
//           })}
//         </Carousel>
//         </div>
//       </div>
//     </div>
//   );
// };

export default CarouselProduct;
