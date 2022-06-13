import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Banner03 = () => {
    return (
        <div className='full-screen relative'>
            <div className='full-screen absolute text-left-center p-5 md:p-20'>
                <img className='full-screen h-auto object-contain max-w-[140px] md:max-w-[230px] xl:max-w-[250px]' src='/assets/logo_harufit.png' alt='/'></img>
                <h1>심장재활전용<br/>디지털 헬스케어 서비스</h1>
                <h2>웹캠으로 분석한 개인별 체력평가를<br/>바탕으로 맞춤형 운동법을 알려줘요.</h2>
                <button className='index-trans-btn flex my-4 md:my-16'>더 알아보기<BsArrowRight className='ml-12 fill-blue-500'/></button>
            </div>
            <img className='full-screen object-cover' src='/assets/index/banner03.png' alt='/'></img>
        </div>
    )
}

export default Banner03
