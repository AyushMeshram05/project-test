import React from "react";
import Styles from'./Home.module.css'
import img1 from '../../assets/Home/Homebg1.png'

const Home = () => {
  return <>
    <div className={Styles.home}>
    <h1 className={Styles.text} >Cakes for Every Occasion <br/>By <span className={Styles.text2}>WhiteBells Bakers</span></h1>
      <img src={img1} alt="/"/>
    </div>
  </>;
};

export default Home;
