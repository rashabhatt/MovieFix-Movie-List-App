import "../../styles/HeroStyle.css";
import ImgHero  from "../../assets/image.jpg";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${ImgHero})` }}>
      <div className="content">
        <h1>Be Creative.</h1>
        <p>
          {" "}
          Get ready to transform your React applications into visually stunning
          experiences.
        </p>
        <a href="#">Start Now</a>
      </div>
    </section>
  );
}

export default Hero;