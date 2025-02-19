import Image from 'next/image'
import SlideBg01 from '../slide-bg-01.jpg'
import SlideBg02 from '../slide-bg-02.jpg'
import SlideBg03 from '../slide-bg-03.jpg'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section>
          <Image src={SlideBg01} alt="SlideBg01" priority />
          <Image src={SlideBg02} alt="SlideBg02" priority />
          <Image src={SlideBg03} alt="SlideBg03" priority />
        </section>
      </main>
    </div>
  )
}
