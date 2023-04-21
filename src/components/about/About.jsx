import React from 'react'
import './about.css'
import myimage from '../../img/img1.png'
const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={myimage} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          A young aspiring Web Developer and Data Scientist looking for an opportunity in your company.
        </p>
        <p className="a-desc">
        I'm a web developer with a focus on the MERN stack, but still
        exploring other technologies and frameworks that catch my interest! if you're looking for a
         developer to add to your team, I'd love to hear from you!<br/>
         I also have interest in Data Scientist and currently working on various Projects.
        </p>
        <form action="https://drive.google.com/file/d/1E8uskCzoKN2NGaXDmfTGbE9VDP3Xlht7/view?usp=share_link" target='_blank'>
        <button className='mybtn'>Download CV</button>
        </form>
      </div>
    </div>
  )
}

export default About
