import Head from 'next/head'

/* Swiper Import */
import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay, Scrollbar, Mousewheel} from "swiper"
import "swiper/css"
import "swiper/css/scrollbar"

import Banner01 from '../components/index/Banner01'
import Banner02 from '../components/index/Banner02'
import Banner03 from '../components/index/Banner03'
import Banner04 from '../components/index/Banner04'

const Home = () => {
    return (
        <div>
            <Head>
                <title>L&H Labs</title>
                <meta name="L&H Labs" content="L&H Labs"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* [globals.css] full-screen : w-full h-full */}
            <div className='full-screen fixed pt-16'>
                {/* npm i swiper */}
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                      delay: 6000,
                      disableOnInteraction: false,
                    }}
                    direction={"vertical"}
                    slidesPerView={1}
                    mousewheel={true}
                    scrollbar={{
                        hide: true
                    }}
                    modules={[Autoplay, Scrollbar, Mousewheel]}
                    className='full-screen'>
                    <SwiperSlide>
                      <Banner01/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Banner02/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Banner03/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Banner04/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Home