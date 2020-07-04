import React from 'react'

function About () {
  return (
    <>
      <h1 className='pageTitle'>About</h1>
      <hr />
      <img className='img-fluid' id='me' src='/images/me.jpeg' alt='Solomon' />
      <h3>Hey, I'm Solomon EKe.</h3>
      <p>
        Full Stack Web Developer leveraging a background in Cyber Security.
        Recently earned a certificate in Full Stack Development from Carleton
        University with skills in HTML, CSS, JavaScript, responsive web design,
        jQuery, Node.js, Express.js, and MySQL. Strengths in problem-solving,
        attention to detail, team-work and leadership. Excited to combine my
        natural creativity, curiosity, and passion with web development skills
        in order to generate meaningful, aesthetic, user-friendly apps and
        websites.
      </p>

      <div className='online row'>
        <div className='linkedin col-md-4'>
          <a
            href='https://www.linkedin.com/in/solomon-eke-0819a3189/'
            target='_blank'
          >
            <i className='fab fa-linkedin fa-lg icon'></i>
          </a>
        </div>

        <div className='github col-md-4'>
          <a href='https://github.com/solomon-eke' target='_blank'>
            <i className='fab fa-github icon'></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default About
