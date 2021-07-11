import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function FirstPost() {
    return (
        <div>
            <main>
                <Image
                    src="/images/bunnyHugOutline.png" // Routee of the image file
                    height={117} // Desired size with correct aspect ratio
                    width={533} // Desired size with correct aspect ratio
                    alt="BunnyHug"
                />

                <h1>Bu Hu Collections</h1>

                <div class="open_grid">
                    <section class="store">

                        <a href="https://opensea.io/collection/bu-hu-clothing">
                            <Image
                                src="/images/banner_buhuos.png
                " // Route of the image file
                                height={500} // Desired size with correct aspect ratio
                                width={1500} // Desired size with correct aspect ratio
                                alt="Bu Hu Banner"
                            />
                        </a>

                        <a href="https://opensea.io/collection/i-3-bu-hu">
                            <Image
                                src="/images/banner_bh.png" // Route of the image file
                                height={400} // Desired size with correct aspect ratio
                                width={1400} // Desired size with correct aspect ratio
                                alt="discord"
                            />
                        </a>
                        <a href="https://opensea.io/collection/bu-hu-argyle">
                            <Image
                                src="/images/banner_argyle.png" // Route of the image file
                                height={400} // Desired size with correct aspect ratio
                                width={1400} // Desired size with correct aspect ratio
                                alt="discord"
                            />
                        </a>
                        <a href="https://opensea.io/collection/bu-hu-eyes">
                            <Image
                                src="/images/banner_eyes.png" // Route of the image file
                                height={400} // Desired size with correct aspect ratio
                                width={1400} // Desired size with correct aspect ratio
                                alt="discord"
                            />
                        </a>
                        <a href="https://opensea.io/collection/bu-su">
                            <Image
                                src="/images/banner_busu.png" // Route of the image file
                                height={400} // Desired size with correct aspect ratio
                                width={1400} // Desired size with correct aspect ratio
                                alt="discord"
                            />
                        </a>

                    </section>
                </div >
            </main>
        </div>


    )
}