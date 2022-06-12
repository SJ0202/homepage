import React from 'react'

const Banner01 = () => {
    return (
        <div className='full-screen relative'>
            <div className='full-screen absolute text-left-bottom p-5 md:p-20'>
                <h1>당신의 오늘 하루,<br/>건강계획을 세워보세요.</h1>
                <h2>체력평가부터 개인맞춤운동까지!</h2>
            </div>
            <img className='full-screen object-cover' src='/assets/index/banner01.png' alt='/'></img>
        </div>
    )
}

export default Banner01
