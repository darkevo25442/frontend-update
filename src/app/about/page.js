import Head from 'next/head';

export default function About() {
  return (
    <>
    <title>Elaina</title>
      <Head>
        <title>เกี่ยวกับเอลไลนา</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <br/><br/><br/>
      <div className="container-fluid" style={{ backgroundColor: '#6f2c91', minHeight: '100vh', padding: '20px' }}>
        <div className="card mt-4" style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <div className="hero" style={{ padding: '60px 0', textAlign: 'center' }}>
            <h1>เกี่ยวกับอิเลน่า</h1>
            <img
              src="/assets/img/elaina4.jpg"
              alt="Elaina"
              className="character-img"
              style={{ width: '200px', borderRadius: '10px' }}
            />
            <p className="lead">อิเลน่า แม่มดสาวผู้เดินทางค้นหาประสบการณ์และการผจญภัย</p>
          </div>
          <div className="container my-5">
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
            <p className="quote" style={{ fontStyle: 'italic', color: '#3f2ff5' }}>
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
