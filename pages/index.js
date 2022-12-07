import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abstract Help Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className='bg-indigo-100 grid h-56 gap-4 content-center place-items-center'>
        <h3 className='text-7xl'>How can we help?</h3>
        <input className='p-6 border border-black rounded' placeholder='Search'/>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
