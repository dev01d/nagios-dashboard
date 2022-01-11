import Head from 'next/head'
import TopCard from '../src/components/TopCard'
import BottomCard from '../src/components/BottomCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nagios Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <TopCard />
          <BottomCard />
        </div>
      </main>
    </div>
  )
}
