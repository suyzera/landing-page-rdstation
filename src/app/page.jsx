"use client";

import styles from "@/app/Home.module.scss";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import Main from "./Home/components/Main/Main";
import ResultsSection from "./Home/components/ResultsSection/ResultsSection";
import ToolsSection from "./Home/components/ToolsSection/ToolsSection";
import AccountContainer from "./Home/components/AccountContainer/AccountContainer";
import VideoSection from "./Home/components/VideoSection/VideoSection";
import OperationSection from "./Home/components/OperationSection/OperationSection";

export default function Home() {
  return (
    <div className={styles.grid}>
      <Navbar></Navbar>
      <Main></Main>
      <ResultsSection></ResultsSection>
      {/* <ToolsSection></ToolsSection> */}
      <AccountContainer></AccountContainer>
      <VideoSection></VideoSection>
      <OperationSection></OperationSection>
      <Footer></Footer>
    </div>
  );
}
