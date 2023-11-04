
import React, { useState,useRef } from 'react';
import styles from "./Products.module.css"
import img2 from "../../assets/Products/631702f4-1368-4592-b7d0-6c798c231140.jpg"
// import img1 from "../../assets/Products/5d"

import { TopPick } from '../../data/TopPick';
import CardDetail from './CardDetails'; // Import the CardDetail component

const Products = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftSlide = () => {
    const slider = document.getElementById('slider');
    const newPosition = scrollPosition - 400;
    setScrollPosition(newPosition);
    slider.scrollTo({ left: newPosition, behavior: 'smooth' });
  }

  const handleRightSlide = () => {
    const slider = document.getElementById('slider');
    const newPosition = scrollPosition + 400;
    setScrollPosition(newPosition);
    slider.scrollTo({ left: newPosition, behavior: 'smooth' });
  }

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.horizontal}`}>
        <h4 className="px-5 py-2 ">
          {" "}
          <strong>Tops Picks</strong>
        </h4>
        <div  className='d-flex justify-content-between align-items-center mx-2 '>
        <i className="fa-solid fa-chevron-left fs-1 cursor-pointer" onClick={handleLeftSlide}></i>
        <div className={`${styles.scroll}`} id="slider">
          {TopPick.filter((card) => card.topPick) // Filter items where topPick is true
            .map((card, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 col-sm-12 card ${styles.card} ${styles.row_poster}`}
              >
                <img className={styles.image} src={card.imageUrl} alt="/" />
                <p>title: {card.title}</p>
              </div>
            ))}
        </div>
        <i className="fa-solid fa-chevron-right fs-1 cursor-pointer" onClick={handleRightSlide}></i>
        </div>
      </div>
      <div>
        <h4 className="px-5 py-2 ">
          {" "}
          <strong>Newly Lanuched</strong>
        </h4>

        <div className={`${styles.new} row`} >
        {TopPick.map((card, index) => {
  if (!card.topPick) {
    return (
      <div
        key={index}
        className={`col-lg-4 col-md-6 col-sm-12 card  ${styles.card}`}
      >
        <img className={`${styles.image}`} src={card.imageUrl} alt="/" />
        <p>title: {card.title}</p>
      </div>
    );
  }

})}
        </div>
      </div>
    </div>
  );
};

export default Products;