import React from "react";

import styles from "../../styles/components/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_logo}>Give it Beans</h1>
    </header>
  );
}
