import styles from "./Header.module.css";

import Image from "next/image";

import header from "@/assets/header.png";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div>
        <Image src={header} alt='' />
      </div> */}
      <div>
        <h2>HAR KUNI YANGI IBORALAR</h2>
        <h2>O'RGANISH UCHUN</h2>
        <h1>BIZGA OBUNA BO'LING!</h1>
      </div>
    </header>
  );
};

export default Header;
