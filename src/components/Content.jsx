import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import { data } from "../data/recipes";

function Content() {
  const recipes = data;
  console.log(recipes);
  return (
    <div className="container flex-fill">
      <h1 className="mt-20 mb-20">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          {recipes.map((recipe, index) => (
            <Recipe key={index} title={recipe.title} img={recipe.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
