import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>BuHu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Image
          src="/images/bhtitle.png" // Route of the image file
          height={117} // Desired size with correct aspect ratio
          width={533} // Desired size with correct aspect ratio
          alt="BunnyHug"
        />

        {/* <h1 className="title">
          Learn to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <p className="description">
          VR Fashion
        </p>



        <div className="grid">
          <a href="https://opensea.io/collection/bu-hu-clothing" className="card">
            <h3>OpenSea &rarr;</h3>
            <p>Shop our virtual fashion line.</p>
          </a>

          <a href="https://discord.gg/pM9ZgAe89K" className="card">
            <h3>Discord &rarr;</h3>
            <p>Join the Discord!</p>
          </a>

          {/* <a
            href="https://twitter.com/?lang=en"
            className="card"
          >
            <h3>Twitter &rarr;</h3>
            <p>Follow us.</p>
          </a> */}

          {/* <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>


      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>


    </div>
  )
}
