import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Banner02 = () => {
    return (
        <div className='full-screen grid grid-rows-5 grid-cols-3 p-5 lg:p-20'>
            <img className='full-screen object-contain row-span-3 col-span-full lg:row-span-full lg:col-span-1' src='/assets/index/banner02.png' alt='/'></img>
            <div className='full-screen row-span-2 col-span-full text-center-center lg:row-span-full lg:col-span-2 lg:text-right-center'>
                <img className='full-screen h-auto mb-2 md:mb-5 object-contain max-w-[120px] md:max-w-[250px]' src='/assets/logo_cadio.png' alt='/'></img>
                <h2>심장질환 또는 심혈관계 고위험군대상</h2>
                <h1>심혈관계 피트니스 증진 서비스</h1>
                <button className='index-btn flex my-4'>더 알아보기<BsArrowRight className='ml-12'/></button>
            </div>
            
        </div>
    )
}

export default Banner02
