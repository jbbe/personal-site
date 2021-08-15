import React from 'react'
import { Typewriter } from '../typewriter/TypingText'

export const InfoContainer = () => {
    return (
        <div className='info-container'>
            <img className='profile-pic' src='/Josh.jpg' alt='' />

            <Typewriter 
                texts={["Full Stack Developer", "Three.js Developer", "React.js Developer", "C# Developer"]} 
                interval={400} />

            <h2>Josh Bell</h2>
            
        </div>
    )
}
