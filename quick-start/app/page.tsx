import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center bg-blue-900">
      <div className="m-4 order-last">
        <Image src="/1903907.jpg" width={100} height={100} alt="Next Logo" className="rounded-full"/>
      </div>
      <div className="mx-4 self-center text-center'">
        <h1 className="text-6xl font-bold text-zinc-300">Fatima Shahzad</h1>
        <h2 className="text-3xl font-semibold text-blue-300 ">Certified front end web developer</h2>
        <button className="my-4 px-4 py-2 border-2 border-black rounded-lg text-black bg-stone-50">
          Learn More</button>
      </div>
    </div>
  )
}
