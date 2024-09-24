import styles from "./Recipe.module.scss";
import { useState } from "react";

function Recipe({ title, img }) {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={img} alt="photo d'une recette" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <i
          className={`fa-solid fa-heart ${liked ? "text-primary" : ""}`}
          onClick={handleClick}
        ></i>
      </div>
    </div>
  );
}

export default Recipe;
