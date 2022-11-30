const About = () => {
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/me.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            Hello! I’m Ibrahim Ahmed. Software Engineer from Pakistan.
            I have over 5 years of experience as a Full Stack Developer.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> 27
              </li>
              <li>
                <strong>Residence:</strong> Pakistan
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Islamabad
              </li>
              <li>
                <strong>Phone:</strong> +92 310 5444579
              </li>
              <li>
                <strong>E-mail:</strong> ibrahim_ahmed1@outlook.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="#" className="btn hover-animated">
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
