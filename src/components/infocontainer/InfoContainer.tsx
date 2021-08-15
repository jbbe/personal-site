import React from 'react'
import { TypingText } from '../typingtext/TypingText'

export const InfoContainer = () => {
    return (
        <div className='info-container'>
            <img className='profile-pic' src='/Josh.jpg' alt='' />

            <TypingText texts={["Full Stack Developer", "Three.js Developer", "React.js Developer", "C# Developer"]} 
                interval={400} />

            <h2>Josh Bell</h2>
            
        </div>
    )
}
