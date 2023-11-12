import React from 'react'
import Lottie from 'react-lottie'
import * as LoadingAnimation from './../../assets/animation/LoadingAnimation.json'
const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='fixed h-screen w-screen flex items-center justify-center bg-slate-200 bg-opacity-20' style={{ zIndex: '9999' }}>
            <Lottie options={defaultOptions}
                height={500}
                width={500} />
        </div>
    )
}

export default Loading