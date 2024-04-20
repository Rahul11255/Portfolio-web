import React from 'react'
import "./body.css"
import bio from  "../../images/body_img.jpeg"


const Bio = () => {
  return (
    <div className='body_container'>
    <div className='bio_left items'>
        <div className='bio_text'> <h1>Bio</h1></div>
        <div className='bio_img'> 
         <img src={bio} alt='img' loading="lazy" />
        </div>
    </div> 
    <div className='bio_right items'>
        <h1>I am a freelance designer and art director.</h1>
        <p>I spent eight years of my professional life helping clients find their visual identities and bring them to light in the best way possible.</p>
        <p>I have worked with small and large businesses including Jeffries and Madison, Harper and Partners Inc., Stipple Unlimited, and Arivaci & Co.</p>
    </div>
    </div>
  )
}

export default Bio;