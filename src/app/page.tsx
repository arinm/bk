import type { NextPage } from "next";
import { mockData } from "./utils/mockData";
import styles from "./styles/Home.module.scss";
// import { Book } from "../types";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Bookstore</h1>
      {mockData?.map((book) => (
        <div key={book.id} className={styles.book}>
          <h2 className={styles.title}>{book.title}</h2>
          <p className={styles.author}>Author: {book.author}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
