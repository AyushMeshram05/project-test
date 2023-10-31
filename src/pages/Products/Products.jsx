import React, { useState } from 'react';
import styles from "./Products.module.css"
import img2 from "../../assets/Products/631702f4-1368-4592-b7d0-6c798c231140.jpg"
// import img1 from "../../assets/Products/5d"

import { TopPick } from '../../data/TopPick';
import CardDetail from './CardDetails'; // Import the CardDetail component
const topicks = [
  {
    title: 'Card 1',
    imageUrl: img2,
  },
  {
    title: 'Card 2',
    imageUrl: img2,
  },
  {
    title: 'Card 3',
    imageUrl: img2,
  },
  {
    title: 'Card 4',
    imageUrl: img2,
  },
  {
    title: 'Card 4',
    imageUrl: img2,
  },
  {
    title: 'Card 4',
    imageUrl: img2,
  },

]

const cardData = [
  {
    title: 'Card 1',
    imageUrl: img2,
  },
  {
    title: 'Card 2',
    imageUrl: img2,
  },
  {
    title: 'Card 3',
    imageUrl: img2,
  },
  {
    title: 'Card 4',
    imageUrl: img2,
  },
  {
    title: 'Card 3',
    imageUrl: img2,
  },
  {
    title: 'Card 4',
    imageUrl: img2,
  },
  {
    title: 'Card 3',
    imageUrl: img2,
  },
  {
    title: 'Card 4',
    imageUrl: img2,
  },
];
const Products = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.horizontal}`}>
        <h4 className="px-5 py-2 ">
          {" "}
          <strong>Tops Picks</strong>
        </h4>
        <div className={styles.scroll}>
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
      </div>
      <div>
        <h4 className="px-5 py-2 ">
          {" "}
          <strong>Newly Lanuched</strong>
        </h4>

        <div className="row d-flex justify-content-evenly align-items-center gap-5 p-2">
        {TopPick.map((card, index) => {
  if (!card.topPick) {
    return (
      <div
        key={index}
        className={`col-lg-4 col-md-6 col-sm-12 card ${styles.card}`}
      >
        <img className={`${styles.image}`} src={card.imageUrl} alt="/" />
        <p>title: {card.title}</p>
      </div>
    );
  }
  // return null; // If topPick is true, don't render anything
})}
        </div>
      </div>
    </div>
  );
};

export default Products;