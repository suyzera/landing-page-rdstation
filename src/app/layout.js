import Navbar from "./components/Navbar";
import "./styles/globals.scss";
import styles from "./styles/layout.modules.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={styles.body}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
