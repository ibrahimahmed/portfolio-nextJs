import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    spaceBetween: 70,
    slidesPerView: 2,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    breakpoints: {
      720: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
    },
  };
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Testimonials</div>
        </div>
        {/* testimonials items */}
        <div className="reviews-carousel">
          <Swiper {...props} className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="info">
                    <div className="name">Amr Eid</div>
                    <div className="company">Pharmacy Owner</div>
                  </div>
                  <div className="text">
                    Ibrahim makes things happen!
                    His ability to listen and understand his clients’ needs
                    allows him to consult effectively.
                    He leads by example and is a trusted colleague.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="info">
                    <div className="name">Faizan ul Haq</div>
                    <div className="company">Software Developer</div>
                  </div>
                  <div className="text">
                    Ibrahim is an enthusiastic, passionate and professional person in the software development,
                    project management and the related areas
                    having continuous effort to be the best in his professional doings.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="reviews-item content-box">
                  <div className="info">
                    <div className="name">Athar Mehmood</div>
                    <div className="company">Senior Software Developer</div>
                  </div>
                  <div className="text">
                  Ibrahim is a passionate and expert developer who has a great grip on Node js and React js.
                  It was a great experience working with him and I highly recommend him for software dev-related jobs/tasks.
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          {/* navigation */}
          <div className="swiper-nav">
            <a className="prev swiper-button-prev fas fa-long-arrow-alt-left" />
            <a className="next swiper-button-next fas fa-long-arrow-alt-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
