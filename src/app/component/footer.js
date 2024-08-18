import Image from "next/image"
export default function footer() {
    return (
      <footer className="bg-dark text-white py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h5>Why We Love Elaina</h5>
        <p>Elaina embodies the spirit of curiosity and discovery. Her travels remind us of the beauty of the unknown and the lessons that can be found in every corner of the world. Whether she is facing challenges or enjoying peaceful moments, elaina story teaches us the importance of perseverance, compassion, and an open heart.</p>
      </div>
      <div className="col-md-4">
        <center>
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="about" className="text-white">About</a></li>
          <li><a href="https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B8%94" target="_blank" className="text-white">"Wiki"</a></li>
        </ul>
        </center>
      </div>
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <address>
        9 ถนนเวียงแก้ว ตำบลศรีภูมิ อำเภอเมือง<br />
          เชียงใหม่ 50200<br />
          <a href="https://www.cmtc.ac.th/"target="_blank" className="text-white">https://www.cmtc.ac.th/</a>
        </address>
      </div>
    </div>
    <div className="text-center mt-4">
      <p>© 2024 LOVE ELAINA Company.</p>
    </div>
  </div>
</footer>
    )
};