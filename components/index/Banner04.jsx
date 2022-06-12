import React from 'react'

const Banner04 = () => {
    return (
        <div className='full-screen grid grid-rows-2'>
            <img className='full-screen object-contain row-span-1' src='/assets/index/banner04.png' alt='/'></img>
            <div className='full-screen text-center-center'>
            <img className='full-screen h-auto object-contain max-w-[180px] md:max-w-[250px]' src='/assets/logo_refresh.png' alt='/'></img>
                <h2 className='mb-8'>지쳤던 나를 위한 시간</h2>
                <h1>체계적인 명상·요가프로그램을 통한<br/>몸 마음 힐링 서비스</h1>
            </div>
        </div>
    )
}

export default Banner04
