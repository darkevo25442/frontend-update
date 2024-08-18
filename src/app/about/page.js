'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './AboutPage.module.css';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    
      <Head>
        <title>เกี่ยวกับอิเลน่า</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className={`container-fluid ${styles.pageBackground}`}>
        <div className={`card mt-4 ${styles.cardContainer} ${isVisible ? styles.slideIn : ''}`}>
          <div className="card-body text-center">
            <h1 className="card-title">เกี่ยวกับอิเลน่า</h1>
            <img
              src="/assets/img/elaina4.jpg"
              alt="Elaina"
              className={`${styles.characterImg} img-fluid rounded-circle`}
            />
            <p className="lead mt-3">อิเลน่า แม่มดสาวผู้เดินทางค้นหาประสบการณ์และการผจญภัย</p>
          </div>
          <div className="card-body">
            <h2>ข้อมูลทั่วไป</h2>
            <p>
              อิเลน่าเป็นแม่มดที่มีความสามารถในการใช้เวทมนตร์และมีความอยากรู้อยากเห็นสูง เธอออกเดินทางไปยังหลายประเทศและได้พบกับผู้คนและสถานที่ต่างๆ
            </p>
            <h2>นิสัยและความสามารถ</h2>
            <ul>
              <li>ชอบการเรียนรู้สิ่งใหม่ ๆ</li>
              <li>มีความมุ่งมั่นในการเป็นแม่มดที่เก่ง</li>
              <li>มีความสามารถในการใช้เวทมนตร์หลายประเภท</li>
            </ul>
            <h2>คำพูดที่มีชื่อเสียง</h2>
            <p className={styles.quote}>
              "การเดินทางเป็นการเรียนรู้ที่ดีที่สุด"
            </p>
            <h2>การเดินทางของเธอ</h2>
            <p>
              อิเลน่าได้เดินทางไปยังหลายสถานที่ที่น่าสนใจ เช่น หมู่บ้านที่มีเวทมนตร์, ป่าแห่งความลึกลับ และเมืองที่มีประวัติศาสตร์ที่น่าสนใจ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
