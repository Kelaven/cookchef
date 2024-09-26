import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../../../context/apiContext";

// function Recipe({ title, img, liked, _id }) {
function Recipe({ recipe: { title, img, liked, _id }, toggleLikeRecipe }) {
  const BASE_URL_API = useContext(ApiContext);

  // envoyer le like au serveur :
  async function handleClick() {
    try {
      const response = await fetch(`${BASE_URL_API}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });
      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikeRecipe(updatedRecipe);
      }
    } catch (error) {
      console.log(error);
    }
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
