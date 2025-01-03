import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to ZwSite App!" />
        <p className="description">
         You can start by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
