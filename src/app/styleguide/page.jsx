import Image from "next/image";
import styles from "./StyleGuide.module.scss";
import { Roboto_Mono, Poppins } from "next/font/google";
import Logo1 from "@/app/images/icons/icon.svg";
import Logo2 from "@/app/images/icons/icon-1.svg";
import Logo3 from "@/app/images/icons/icon-2.svg";
const poppinsBolder = Poppins({ subsets: ["latin"], weight: "700" });
const robotoBolder = Roboto_Mono({ subsets: ["latin"], weight: "700" });
const robotoLighter = Roboto_Mono({ subsets: ["latin"], weight: "400" });

const StyleGuide = () => {
  return (
    <div className={`${styles.grid} ${robotoBolder.className} `}>
      <nav>
        <ul className={styles.navigationGrid}>
          <li>
            <span
              className={`${styles.floatingNumber} ${robotoLighter.className} `}
            >
              01
            </span>
            <a href="#" className={robotoBolder.className}>
              // Home
            </a>
          </li>
          <li>
            <span
              className={`${styles.floatingNumber} ${robotoLighter.className} `}
            >
              02
            </span>
            <a href="#" className={robotoBolder.className}>
              // Expertise
            </a>
          </li>
          <li>
            <span
              className={`${styles.floatingNumber} ${robotoLighter.className} `}
            >
              03
            </span>
            <a href="#" className={robotoBolder.className}>
              // Work
            </a>
          </li>
          <li>
            <span
              className={`${styles.floatingNumber} ${robotoLighter.className} `}
            >
              04
            </span>
            <a href="#" className={robotoBolder.className}>
              // Experience
            </a>
          </li>
          <li>
            <span
              className={`${styles.floatingNumber} ${robotoLighter.className} `}
            >
              05
            </span>
            <a href="#" className={robotoBolder.className}>
              // Contact
            </a>
          </li>
        </ul>
      </nav>

      <main className={styles.mainGrid}>
        <h2 className={`${styles.title} ${poppinsBolder.className} `}>
          Arthur Ussuy
        </h2>
        <h1 className={`${styles.subtitle} ${robotoBolder.className} `}>
          Software Enginner, front end & app developer
        </h1>

        <span className={styles.scrollBtn}>
          <a href="#">
            <span className={styles.mouse}>
              <span></span>
            </span>
          </a>
          <p>scroll me</p>
        </span>
      </main>

      <aside className={styles.expertise}>
        <h2 className={poppinsBolder.className}>Expertise</h2>
        <div className={styles.expertiseContainer}>
          <div className={styles.development}>
            <Image src={Logo1} />
            <h3>Software Development</h3>
            <p>
              Experienced in both functional and OOP: Dart, Python, Java,
              JavaScript, TypeScript.
            </p>
            <div className={styles.lineTitle}>
              <span>H3</span>
              <div></div>
              <span>H3</span>
            </div>
          </div>
          <div className={styles.frontend}>
            <Image src={Logo2} />
            <h3>Frontend Dev React, NextJS</h3>
            <p>
              Passionate about UI/UX. Over 4 years of development experience in
              HTML, CSS, JS, React and NextJS frameworks.
            </p>
            <div className={styles.lineTitle}>
              <span>H3</span>
              <div></div>
              <span>H3</span>
            </div>
          </div>
          <div className={styles.flutter}>
            <Image src={Logo3} />
            <h3>Flutter Dev, Android, IOS</h3>
            <p>
              Skilled in developing hybrid mobile apps and cross-platform
              solutions using the Flutter framework.
            </p>
            <div className={styles.lineTitle}>
              <span>H3</span>
              <div />
              <span>H3</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default StyleGuide;
