const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: ibrahim_ahmed1@outlook.com</p>
        <p>T: +92 310 5444579</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ibrahimahmed1995/">
            <span className="icon fab fa-linkedin" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/journeywithibrahim/">
            <span className="icon fab fa-instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ibrahimahmed">
            <span className="icon fab fa-github" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
