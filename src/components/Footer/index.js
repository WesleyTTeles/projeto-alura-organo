import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="icon">
        <img src="/images/ig.png" alt="icon instagram" />
        <img src="/images/fb.png" alt="icon facebook" />
        <img src="/images/tw.png" alt="icon twitter" />
      </div>

      <div className="logo">
        <img src="/images/logo.png" alt="logo organo" />
      </div>

      <span>Desenvolvido por Wesley Teles + Alura</span>
    </footer>
  );
};

export default Footer;
