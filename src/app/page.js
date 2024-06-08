import Image from "next/image";
import styles from "./page.module.css";
import TemplateStyle from "@/components/TemplateStyle";
import Siderbarmenu from "@/components/Siderbarmenu";
import Menuscroll from "@/components/menuscroll";

export default function Home() {
  return (
    <div className={styles.main} style={{position: 'absolute'}}>
      <div className="page-loader" style={{ display: "none" }}>
        <div className="bounceball"></div>
      </div>
      <span className="icon-menu">
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      
    </div>
  );
}
