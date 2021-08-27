import React from 'react'
import { Typewriter } from '../typewriter/TypingText'

export const InfoContainer = () => {
    return (
        <div className='info-container'>
            <img className='profile-pic' src='/Josh.jpg' alt='' />

            <Typewriter 
                texts={["Full Stack Developer", "Three.js Developer", "React.js Developer", "C# Developer"]} 
                interval={300} />

            <h2>Josh Bell</h2>
            <div className='linkContainer'>
                <img className='icon' src='github.png' alt='Github' />
                <a href='https://github.com/jbbe' >
                    <p>github.com/jbbe</p>
                </a>
            </div>
        </div>
    )
}
