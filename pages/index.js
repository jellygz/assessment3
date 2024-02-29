import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import logo from "../images/bcit_logo.png";
import cart from "../images/shopping.png";
import { bookstore } from "../data/books.js";

export default function Home() {

  return (
    <>
      <Head>
        <title>BCIT Book Store</title>
        <meta name="description" content="All online pick-up orders are available at the Burnaby Campus Bookstore (SE2). 
        Please allow 2-3 business days for order processing." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html>
        <body>
        <header class={`${styles.navbar}`}>
          <Image src={logo} className={styles.logo}  />
          <nav>
            <ul className={styles.nav}>
              <li className={styles.list}>Home</li>
              <li className={styles.list}>Hours</li>
              <li className={styles.list}>Merchandise</li>
            </ul>
            </nav>
            <Image src={cart} className={styles.cart} />
        </header>
        <main className={`${styles.main}`}>
          <div className={styles.sidebar}>
            <ul>
              <li className={styles.subject}>All</li>
              <li className={styles.subject}>Communications</li>
              <li className={styles.subject}>Computer Science</li>
              <li className={styles.subject}>Marketing</li>
              <li className={styles.subject}>Math</li>
            </ul>
          </div>
          <div className={styles.productContainer}>
            <div className={styles.buttonContainer}>
              <button className={styles.button}>Book Title</button>
              <button className={styles.button}>↑</button>
              <button className={styles.button}>↓</button>
            </div>
            <div className={styles.product}>
              {bookstore.books.map((book, index) => (
                 <div key={index}>
                 <Image src={book.image} width={200} height={300} />
                 <p>{book.course}</p>
                 <p>{book.title}</p>
                 {book.authors.map((author, index) => (
                  <p key={index}>{author}</p>
                 ))}
                 <p>{book.edition}</p>
               </div>
              ))}
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <p>&copy; Jillian Gonzales &copy;</p>
        </footer>
        </body>
      </html>
    </>
  );
}
