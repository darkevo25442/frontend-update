import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./component/carousel";
import Card from "./component/card";

export default function Home() {
  return (
    <div className={styles.pageBackground}>
      <br/><br/><br/><br/><br/>
      <title>Home</title>
      <Carousel />
      <br />
      <Card />
      <br />
    </div>
  );
}
