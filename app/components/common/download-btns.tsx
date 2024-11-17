import Image from 'next/image'
import React from 'react'
import app from '/public/assets/appstore.svg'
import play from '/public/assets/playstore.svg'
import Link from 'next/link'

const DownloadBtns = () => {
    return (
        <div className="flex gap-2   justify-center items-center w-full"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <Link href={'#'} className="hover:scale-105     transition-all duration-300">
                <Image src={app} alt="Download on the App Store" width={320} height={180} className="btn   " />
            </Link>

            {/* Play Store Button */}
            <Link href={'#'} className="hover:scale-105 inline-block  transition-all duration-300">
                <Image src={play} alt="Get it on Google Play" width={320} height={180} className="btn-   " />
            </Link>
        </div>
    )
}

export default DownloadBtns
