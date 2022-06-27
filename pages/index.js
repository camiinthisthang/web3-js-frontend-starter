import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Front end starter</title>
    </Head>

    <main className={styles.main}>
      <ConnectButton />

      <h1 className={styles.title}>
        <h1>Frontend starter made with {'<3'} by @camiinthisthang </h1>
        
        <a href="">RainbowKit</a> + <a href="">wagmi</a> +{' '}
        <a href="https://nextjs.org">Next.js</a> + <a href="https://tailwindcss.com/">TailwindCSS</a>
      </h1>

    </main>
  </div>
  )
}
