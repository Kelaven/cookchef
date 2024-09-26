import styles from "./Header.module.scss";
import cookchefLogo from "../../assets/images/logo-cookchef.png";
import { useState } from "react";
import HeaderMenu from "./components/headerMenu/HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={cookchefLogo} alt="logo cookchef" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-primary-reverse">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
      <i
        className={`fa-solid fa-bars ${styles.headerXs}`}
        onClick={() => setShowMenu(!showMenu)}
      ></i>
      {showMenu && (
        <>
          <div className="calc" onClick={() => setShowMenu(false)}></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
