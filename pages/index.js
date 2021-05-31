import Head from 'next/head'
import Image from 'next/image'



export default function Home() {

  // Little Canvas things
  var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext('2d');

  // Set Canvas to be window size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Configuration, Play with these
  var config = {
    particleNumber: 800,
    maxParticleSize: 10,
    maxSpeed: 40,
    colorVariation: 50
  };

  // Colors
  var colorPalette = {
    bg: { r: 12, g: 9, b: 29 },
    matter: [
      { r: 36, g: 18, b: 42 }, // darkPRPL
      { r: 78, g: 36, b: 42 }, // rockDust
      { r: 252, g: 178, b: 96 }, // solorFlare
      { r: 253, g: 238, b: 152 } // totesASun
    ]
  };

  // Some Variables hanging out
  var particles = [],
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    drawBg,

    // Draws the background for the canvas, because space
    drawBg = function (ctx, color) {
      ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

  // Particle Constructor
  var Particle = function (x, y) {
    // X Coordinate
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)], true);
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
  };

  // Provides some nice color variation
  // Accepts an rgba object
  // returns a modified rgba object or a rgba string if true is passed in for argument 2
  var colorVariation = function (color, returnString) {
    var r, g, b, a, variation;
    r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.r);
    g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.g);
    b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation / 2)) + color.b);
    a = Math.random() + .5;
    if (returnString) {
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
      return { r, g, b, a };
    }
  };

  // Used to find the rocks next point in space, accounting for speed and direction
  var updateParticleModel = function (p) {
    var a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
    p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
    return p;
  };

  // Just the function that physically draws the particles
  // Physically? sure why not, physically.
  var drawParticle = function (x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  };

  // Remove particles that aren't on the canvas
  var cleanUpArray = function () {
    particles = particles.filter((p) => {
      return (p.x > -100 && p.y > -100);
    });
  };


  var initParticles = function (numParticles, x, y) {
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(x, y));
    }
    particles.forEach((p) => {
      drawParticle(p.x, p.y, p.r, p.c);
    });
  };

  // That thing
  window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();


  // Our Frame function
  var frame = function () {
    // Draw background first
    drawBg(ctx, colorPalette.bg);
    // Update Particle models to new position
    particles.map((p) => {
      return updateParticleModel(p);
    });
    // Draw em'
    particles.forEach((p) => {
      drawParticle(p.x, p.y, p.r, p.c);
    });
    // Play the same song? Ok!
    window.requestAnimFrame(frame);
  };

  // Click listener
  document.body.addEventListener("click", function (event) {
    var x = event.clientX,
      y = event.clientY;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
  });

  // First Frame
  frame();

  // First particle explosion
  initParticles(config.particleNumber);

  return (
    <div className="container">
      <Head>
        <title>Bu Hu</title>
        <link rel="icon" href="/iconbuhu.png" />
      </Head>

      <main>

        <canvas id="canvas"></canvas>
        {/* <h1>Click Anywhere</h1> */}
        <Image
          src="/images/bunnyHugOutline.png" // Route of the image file
          height={117} // Desired size with correct aspect ratio
          width={533} // Desired size with correct aspect ratio
          alt="BunnyHug"
        />

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
              src="/images/2021 Twitter logo - white.png" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={60} // Desired size with correct aspect ratio

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