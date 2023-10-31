import React from 'react';
import styles from "./Products.module.css"


const CardDetail = ({ title, imageUrl }) => {
    const handleRefreshClick = () => {
        window.location.reload(); // Reload the page when the cross is clicked
      };
  return (
    <div className={`d-flex justify-content-around ${styles.singlecard}`}>
        <div className={styles.back}>
            <img src={imageUrl} className={styles.smImg} alt={title}  />
            <img src={imageUrl} className={styles.smImg} alt={title}/>
            <img src={imageUrl} className={styles.smImg} alt={title}/>
        </div>
      <img src={imageUrl} className={styles.img} alt={title} />
      <div className={styles.des}>
        <h3>Chocolate Truffle Delicious Cake Half Kg</h3>
        <h1>599$</h1>
        <h5>Product Details:

Cake Flavour- Truffle
Weight- Half Kg
Shape- Round
Serves- 4-6 People
Size- 6 inches in Diameter
Please Note:
</h5>

      {/* <h1>{title}</h1> */}
      </div>
      {/* Add other details as needed */}

      <div className={styles.cross} onClick={handleRefreshClick}>
      <i className="fa-solid fa-xmark fa-2xl" ></i>
      </div>
    </div>
  );
};

export default CardDetail;