import styles from "./Content.module.scss";

function Content() {
  return (
    <div className="container flex-fill">
      <h1 className="mt-20 mb-20">Découvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          <div className={styles.elem}>ELEMENTS</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
