import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Junior Fullstack Developer Portfolio</title>
        <meta name="description" content="Portfolio of a Junior Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Jane Doe
        </h1>

        <p className={styles.description}>
          Junior Fullstack Developer
        </p>

        <div className={styles.grid}>
          <a href="#about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>Learn more about my background and skills.</p>
          </a>

          <a href="#projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>Check out some of my recent work.</p>
          </a>

          <a href="#skills" className={styles.card}>
            <h2>Skills &rarr;</h2>
            <p>Explore my technical skills and expertise.</p>
          </a>

          <a href="#contact" className={styles.card}>
            <h2>Contact &rarr;</h2>
            <p>Get in touch with me for opportunities.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

