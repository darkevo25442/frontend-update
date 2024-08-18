'use client';

import Image from "next/image";
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className={`card ${styles.card}`}>
            <Image src="/assets/img/download.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Travel around the world</h5>
              <p className="card-text">I love traveling to different places to admire the beauty and uniqueness of each kingdom, just like I've seen in my favorite books.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className={`card ${styles.card}`}>
            <Image src="/assets/img/elaina2.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mushroom🤢</h5>
              <p className="card-text">I enjoy eating food, especially if it's delicious. However, there's one thing I dislike the most, and that's mushrooms. Even if the best dish in the world has mushrooms in it, I will pick them out without hesitation.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className={`card ${styles.card}`}>
            <Image src="/assets/img/elaina3.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
            <div className="card-body">
              <h5 className="card-title">Love reading, eager to learn.</h5>
              <p className="card-text">I love reading books. Books are what make me calm. I love reading books more than anything else in the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
