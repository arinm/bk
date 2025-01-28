import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/books">Books</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
