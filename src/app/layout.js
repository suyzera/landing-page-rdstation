import "./styles/globals.scss";
import styles from "./styles/layout.modules.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={styles.body}>{children}</body>
    </html>
  );
}
