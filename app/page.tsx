'use client'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      {/* <p>
        <Link href="/users">Users</Link>
      </p> */}
      <button onClick={()=>router.push("/users")}>Click_TO_USER</button>
    </main>
  )
}
