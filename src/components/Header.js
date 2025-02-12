import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='nav'>
        <p>Luis <span className='hostos'>Hostos</span></p>
        <ul>
          <li><a href='#about-me'>sobre mi</a></li>
          <li><a href='#proyectos'>proyectos</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
