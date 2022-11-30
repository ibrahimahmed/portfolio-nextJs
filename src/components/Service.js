const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Web Development</div>
              <div className="text">
                Modern and mobile-ready website and application that will help you reach all of
                your customers or target audience.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-ad" />
              </div>
              <div className="name">Digital Marketing</div>
              <div className="text">
                Advertising services includes SEO, SMM and PPC.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-gamepad" />
              </div>
              <div className="name">Game Development</div>
              <div className="text">
                Developing memorable and unique mobile android, ios and video
                games.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-mobile-alt" />
              </div>
              <div className="name">Mobile Application Development</div>
              <div className="text">
                Cross platform mobile apps like Games, playing music, handle network transactions, interacting
                content etc.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
