import React from 'react';
import styles from "./Collection.module.css";

const Collection = () => {


  return (
    <div className={styles.collection}>
      <div className={styles.main}>
        <div className={styles.img}>
          <img
            id={styles.right}
            src="https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lua3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
            alt="img"
          />
         <p>
          Our designer washbasins are crafted to transform your bathroom into a modern sanctuary. Choose from sleek vessel, undermount, or wall-hung styles, featuring premium ceramic finishes that guarantee both exceptional durability and effortless cleaning for years to come.
          </p>
        </div>
        <div className={styles.img}>
        <p>
          Upgrade your kitchen with our premium collection of sinks, designed for lasting durability and superior performance. From deep, spacious bowls to easy-clean finishes, our sinks seamlessly blend modern style with essential everyday functionality for any task.
          </p>
         
          <img
            id={styles.left}
            src="https://images.unsplash.com/photo-1661045327753-3f2a047d00a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbiUyMHNpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
