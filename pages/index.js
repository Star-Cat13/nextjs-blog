import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from 'react';


export default function Home() {

  return (
    <html>
      <Head>
        <title>Bu Hu</title>
        <link rel="icon" href="/iconbuhu.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BuhuClothing" />
        <meta name="twitter:title" content="BuHu.Clothing Home" />
        <meta name="twitter:description" content="Visit Bu Hu Clothing for the latest VRoid Fashion." />
        <meta name="twitter:image" content="https://github.com/Star-Cat13/nextjs-blog/blob/main/public/images/summery_card.png?raw=true" />
      </Head>

      <body>
        <div class='container'>
          <Image
            src="/images/bunnyHugOutline.png" // Routee of the image file
            height={117} // Desired size with correct aspect ratio
            width={533} // Desired size with correct aspect ratio
            alt="BunnyHug"
          />

          <h1>VRoid Fashion</h1>


          <div class="row">
            <div class="gallery">
              <a href="https://opensea.io/collection/bu-hu-clothing">
                <Image
                  src="/images/feat_buhuos.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="Bu Hu Clothing"
                  class="image"
                />
                <div class="desc">
                  <h3>Bu Hu Clothing</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              <a href="https://discord.gg/pM9ZgAe89K">
                {/* <h3>Discord &rarr;</h3> */}
                <Image
                  src="/images/feat_discord.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="discord"
                  class="image"
                />
                <div class="desc">
                  <h3>Chat Here</h3>
                </div>
              </a>
            </div>
            <div class="gallery">
              <a href="https://twitter.com/BuhuClothing?s=09">
                {/* <h3>Discord &rarr;</h3> */}
                <Image
                  src="/images/feat_twitter.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="discord"
                  class="image"
                />
                <div class="desc">
                  <h3>Follow Here</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              <a href="https://opensea.io/collection/bu-hu-splatter">
                <Image
                  src="/images/feat_splat.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="Bu Hu Splatter"
                  class="image"
                />
                <div class="desc">
                  <h3>Bu Hu Splatter</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              <a href="https://opensea.io/collection/bu-su">
                <Image
                  src="/images/feat_busu.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="Bu Su"
                  class="image"
                />
                <div class="desc">
                  <h3>Bu Su</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              <a href="https://opensea.io/collection/bu-hu-eyes">
                <Image
                  src="/images/feat_eyes.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="Bu Hu Eyes"
                  class="image"
                />
                <div class="desc">
                  <h3>Bu Hu Eyes</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              <a href="https://opensea.io/collection/bu-hu-argyle">
                <Image
                  src="/images/feat_argyle.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="Bu Hu Argyle"
                  class="image"
                />
                <div class="desc">
                  <h3>Bu Hu Argyle</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              <a href="https://opensea.io/collection/i-3-bu-hu">
                <Image
                  src="/images/feat_bh.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="I Love BH"
                  class="image"
                />
                <div class="desc">
                  <h3>I ♥️  BH</h3>
                </div>
              </a>
            </div>

            <div class="gallery">
              {/* <a href="https://opensea.io/collection/team-bu-hu"> */}
              <Image
                src="/images/feat_teams.png" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={600} // Desired size with correct aspect ratio
                alt="Team Bu Hu"
                class="image"
              />
              <div class="desc">
                <h3>Coming Soon</h3>
              </div>
              {/* </a> */}
            </div>

            {/* <div class="gallery">
              <a href="">
              <Image
                src="/images/feat_drip.png" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={600} // Desired size with correct aspect ratio
                alt="Bu Hu Drip"
                class="image"
              />
              <div class="desc">
                <h3>Coming Soon</h3>
              </div>
              </a>
            </div> */}

            {/* <div class="gallery">
              <a href="">
              <Image
                src="/images/feat_army.png" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={600} // Desired size with correct aspect ratio
                alt="Bu Hu Drip"
                class="image"
              />
              <div class="desc">
                <h3>Coming Soon</h3>
              </div>
              </a>
            </div> */}

            {/* <div class="gallery">
              <a href="">
              <Image
                src="/images/feat_vacay.png" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={600} // Desired size with correct aspect ratio
                alt="Bu Hu Drip"
                class="image"
              />
              <div class="desc">
                <h3>Coming Soon</h3>
              </div>
              </a>
            </div> */}

            {/* <div class="gallery">
              <a href="">
              <Image
                src="/images/feat_bubbletea.png" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={600} // Desired size with correct aspect ratio
                alt="Bu Hu Drip"
                class="image"
              />
              <div class="desc">
                <h3>Coming Soon</h3>
              </div>
              </a>
            </div> */}

            {/* </div>
          <h2>Raise Awareness</h2>
          <div class="row">
            <div class="gallery">
              <a href="https://opensea.io/collection/bu-hu-free-ross">
                <Image
                  src="/images/feat_freeRoss.png" // Route of the image file
                  height={400} // Desired size with correct aspect ratio
                  width={600} // Desired size with correct aspect ratio
                  alt="Free Ross"
                  class="image"
                />
                <div class="desc">
                  <h3>Free Ross</h3>
                </div>
              </a>
            </div> */}
          </div>
        </div>

      </body>
    </html >
  )
}