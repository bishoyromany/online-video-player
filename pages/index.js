import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container} id="Home">
      <Head>
        <title>Home Page</title>
      </Head>
      <Link href="/player/Black-Mirror-S3E0">
        <a>Balck Mirror Season 3 Episode 1</a>
      </Link>
    </div>
  );
}
