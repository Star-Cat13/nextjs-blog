import Head from 'next/head'
import Image from 'next/image'

import React, { Component } from 'react';


export default function Home() {






  return (
    <div className="container" >
      <Head>
        <title>Bu Hu</title>
        <link rel="icon" href="/iconbuhu.png" />
      </Head>


      <main>

        <div id="background-color">
          <Image
            src="/images/bunnyHugOutline.png" // Route of the image file
            height={117} // Desired size with correct aspect ratio
            width={533} // Desired size with correct aspect ratio
            alt="BunnyHug"
          />
        </div>

        {/* <h1 className="title">
          Learn to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        <p className="description">
          VRoid Fashion
        </p>



        <div className="grid">
          <a href="https://opensea.io/collection/bu-hu-clothing" className="card">
            {/* <h3>OpenSea &rarr;</h3> */}
            <Image
              src="/images/opensea-logo-flat-colored-white.png" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={165} // Desired size with correct aspect ratio
              alt="opensea"
            />
            <p>Shop here.</p>
          </a>

          <a href="https://discord.gg/pM9ZgAe89K" className="card">
            {/* <h3>Discord &rarr;</h3> */}
            <Image
              src="/images/full_logo_white_RGB.png" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={263} // Desired size with correct aspect ratio
              alt="discord"
            />
            <p>Chat here.</p>
          </a>

          <a
            href="https://twitter.com/BuhuClothing?s=09"
            className="card"
          >
            {/* <h3>Twitter &rarr;</h3> */}
            <Image
              src="/images/twitter_white_logo.png" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={263} // Desired size with correct aspect ratio

              alt="twitter"
            />
            <p>Follow here.</p>
          </a>

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

      </footer>


    </div>
  )
}
