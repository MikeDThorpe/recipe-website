import Header from "./Header";
import styles from "../../styles/components/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;