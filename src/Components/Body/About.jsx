import React from 'react'
import "./about.css"

const About = () => {
  return (
    <>
    <section className='about_container' id='aboutus'>
       <div className='top_about_Text'> 
         <h1> About us</h1>
       </div>
       <div className='center_about_text'>
          <div className='grid_layout'>
            <div>
             <p>5,000</p>
             <p>Happy Clients</p>
            </div>
            <div>
             <p>1,200</p>
             <p>Projects Done</p>
            </div>
            <div>
             <p>500</p>
             <p>Cups of Coffee</p>
            </div>
            <div>
             <p>587</p>
             <p>Working Hourse</p>
            </div>
          </div>
          <div className='about_me'>
             <h5>about me</h5>
             <h1>A UI/UX Designer &  Web Developer Based  in Philippines</h1>
             <p>Far far away, behind the word mountains, far from the countries Vokalia and there  live the blind texts.</p>
             
             <table style={{width:"100%"}}>
              <tr>
                <td>Name:</td>
                <td>Rahul Patel</td>
                <td>Pin Code:</td>
                <td>110042</td>
              </tr>
              <tr>
                <td>Date of birth:</td>
                <td>March 05, 2003</td>
                <td>Email:</td>
                <td> <a href="mailto:rr710505@gmail.com?subject=Inquiry%20About%20Your%20Service&body=Hello,%0D%0A%0D%0AI'm reaching out to inquire about your services. Please provide me with more information.%0D%0A%0D%0AThank you." target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"blue"}}> rr710505@gmail.com </a></td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>New Delhi,India</td>
                <td>Phone:</td>
                <td>9354081946</td>
              </tr>
             </table>
          </div>
       </div>
       <div className='down_cv'> <button className='btn'> <a href="https://github.com/Rahul11255" style={{textDecoration:"none",color:"white"}}> Github Profile</a></button></div>
    </section>
    </>
  )
}

export default About