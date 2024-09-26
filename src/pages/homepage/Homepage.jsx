import styles from "./Homepage.module.scss";
import Recipe from "./components/recipe/Recipe";
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import { ApiContext } from "../../context/apiContext";

function Homepage() {
  const [filter, setFilter] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const BASE_URL_API = useContext(ApiContext);

  useEffect(() => {
    let cancel = false;
    async function fetchRecipes() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL_API);
        if (response.ok && !cancel) {
          // cancel est initialisé à false. Donc au début, !cancel est équivalent à true, ce qui permet au code à l’intérieur du bloc de s’exécuter. Si le composant est démonté, cancel devient true, et !cancel deviendra false, bloquant l’exécution de cette partie du code.
          const recipes = await response.json();
          setRecipes(Array.isArray(recipes) ? recipes : [recipes]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (!cancel) {
          setIsLoading(false);
        }
      }
    }
    fetchRecipes();
    return () => (cancel = true); // clean up. La variable est définie à false au départ. Si le composant est démonté, la fonction de nettoyage (return) modifie cancel à true, et ainsi, si la requête est toujours en cours, les états ne seront pas mis à jour, évitant des erreurs ou des comportements inattendus.
  }, [BASE_URL_API]);

  function updateRecipe(updatedRecipe) {
    setRecipes(
      recipes.map(
        (recipe) => (recipe._id === updatedRecipe._id ? updatedRecipe : recipe) // Si les deux ID correspondent, la recette actuelle est remplacée par la recette mise à jour (updatedRecipe). Sinon, elle conserve la recette d’origine (recipe).
      )
    );
  }

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className="container flex-fill d-flex flex-column">
      <h1 className="mt-20 mb-20">Découvrez nos nouvelles recettes</h1>
      <div
        className={`card d-flex flex-fill flex-column p-20 mb-20 ${styles.contentCard}`}
      >
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className={styles.grid}>
            {recipes
              .filter((recipe) =>
                recipe.title.toLocaleLowerCase().startsWith(filter)
              )
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  // title={recipe.title}
                  // img={recipe.img}
                  // liked={recipe.liked}
                  // _id={recipe._id}
                  recipe={recipe}
                  toggleLikeRecipe={updateRecipe}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
