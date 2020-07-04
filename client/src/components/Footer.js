import React from 'react'

function Footer () {
  return (
    <nav className='navbar fixed-bottom navbar-dark bg-dark footer'>
      <span className='footer-text'>
        phone: 613-408-6662 | email:{' '}
        <a className='footerEmail' href='mailto:ekesolomon11@gmail.com'>
          ekesolomon11@gmail.com
        </a>
      </span>

      <span className='footer-text'>
        © 2020 Solomon Eke. All rights reserved.
      </span>
    </nav>
  )
}

export default Footer
