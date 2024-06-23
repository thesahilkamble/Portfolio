import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
function Hero() {
  return (
    <section id="Hero">
      Some other hero
      <div>
        {" "}
        <img className={styles.hero} src={heroImg} alt="Profile picture" />{" "}
      </div>
    </section>
  );
}

export default Hero;