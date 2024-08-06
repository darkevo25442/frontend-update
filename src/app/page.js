import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./component/carousel";
import Card from "./component/card";
export default function Home() {
  return (
    <>
    <title>Home</title>
    <Carousel/>
    <br/>
    <Card/>
    <br/>
    </>
  );
}
