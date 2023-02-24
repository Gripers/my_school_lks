import styles from "./Navbar.module.css";

import Image from "next/image";

import logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Image src={logo} alt="" />
    </div>
  );
};

export default Navbar;
