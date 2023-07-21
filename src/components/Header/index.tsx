import styles from "./styles.module.scss";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContents}>
        <Link href="/dashboard">
          <img src="" alt="logo da pizzaria" width={190} height={60} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <p>Categoria</p>
          </Link>

          <Link href="/product">
            <p>Cardápio</p>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
