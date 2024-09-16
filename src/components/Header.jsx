import styles from "./Header.module.scss";
import cookchefLogo from "../assets/images/logo-cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars"></i>
      <div className="flex-fill">
        <img src={cookchefLogo} alt="logo cookchef" />
      </div>
      <ul>
        <button className="mr-5 btn btn-primary-reverse">
          <i className="fa-solid fa-cart-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;
