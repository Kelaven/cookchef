import styles from "./Homepage.module.scss";
import Recipe from "./components/recipe/Recipe";
import { data } from "../../data/recipes";
import { useState } from "react";

function Content() {
  const [filter, setFilter] = useState("");
  const recipes = data;

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="container flex-fill">
      <h1 className="mt-20 mb-20">Découvrez nos nouvelles recettes</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>
        <div className={styles.grid}>
          {recipes
            .filter((recipe) =>
              recipe.title.toLocaleLowerCase().startsWith(filter)
            )
            .map((recipe) => (
              <Recipe key={recipe._id} title={recipe.title} img={recipe.img} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
