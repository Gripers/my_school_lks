import styles from "./Links.module.css";

import Image from "next/image";

import inst from "@/assets/inst.svg";
import telegram from "@/assets/telegram.svg";
import facebook from "@/assets/facebook.svg";
import yt from "@/assets/youtube.svg";
import tt from "@/assets/tiktok.svg";
import web from "@/assets/web.svg";

const Links = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <div>
          <Image src={inst} alt="" />
          <a href="http://instagram.com/myschooluz" target="_blank">
            INSTAGRAM
          </a>
        </div>
        <div>
          <Image src={facebook} alt="" />
          <a href="http://facebook.com/myschooluzb" target="_blank">
            FACEBOOK
          </a>
        </div>
        <div>
          <Image src={tt} alt="" />
          <a href="http://tiktok.com/my_schooluz" target="_blank">
            TIKTOK
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <Image src={telegram} alt="" />
          <a href="http://t.me/myschooluz" target="_blank">
            TELEGRAM
          </a>
        </div>
        <div>
          <Image src={yt} alt="" />
          <a href="http://youtube.com/myschoollearningcentre" target="_blank">
            YOUTUBE
          </a>
        </div>
        <div>
          <Image src={web} alt="" />
          <a href="http://myschool.education/" target="_blank">
            WEBSITE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Links;
