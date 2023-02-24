import styles from "@/styles/Home.module.css";

import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Links from "@/components/Links/Links";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Links />
    </main>
  );
}
