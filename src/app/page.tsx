import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.linksDetail}>
        <a href="https://hotel-reservation-twelve.vercel.app/">
          <Image
            src="/hotelreservationscreen.png"
            alt="Image"
            width={500}
            height={500}
            layout="responsive"
          />
        </a>
        <p>Hotel Room Reservation</p>
      </div>
      <div className={styles.linksDetail}>
        <a href="https://ecommerce-dun-two.vercel.app/">
          <Image
            src="/ecommercescreen.png"
            alt="Image"
            width={500}
            height={500}
            layout="responsive"
          />
        </a>
        <p>Ecommerce with Fake Api</p>
      </div>
    </main>
  );
}
