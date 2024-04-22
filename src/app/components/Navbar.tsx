import styles from "./Navbar.module.css";

export const Navbar = async () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.title}>Joaquin's Projects</h1>
    </nav>
  );
};
