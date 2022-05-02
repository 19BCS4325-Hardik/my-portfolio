import React from 'react'
import Me from '../../img/myimg.png'
import './intro.css'
const Intro = () => {
  return (
    <div className='i'>
    <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className='i-intro'>Hello, My name is</h2>
            <h1 className='i-name'>Hardik Chauhan</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Data Scientist </div>
                    <div className="i-title-item">UI/UX designer</div>
                </div>
            </div>
            <p className="i-desc">
           I am a student of Chandigarh University learning about Web Development, UI/UX and Data Science.
            </p>
        </div>
        
    </div>
    <div className="i-right">
    <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro