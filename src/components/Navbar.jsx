import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close, mail, github } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          {/* <img src={logo} alt="logo_fg" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Francisco &nbsp;
            <span className="sm:block hidden"> | Computer Engineer</span>
          </p> */}
        </Link>

        {/* Desktop Navigation with Icons */}
        <div className="hidden sm:flex flex-row gap-10 items-center">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="https://github.com/FrancGarcia" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="w-8 h-8 transform hover:scale-110 transition duration-300 cursor-pointer" />
            </a>
            
            <a href="mailto:frgarciaa1@gmail.com">
              <img src={mail} alt="Email" className="w-8 h-8 transform hover:scale-110 transition duration-300 cursor-pointer filter invert brightness-200" />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown */}
          <div className={`${!toggle ? 'hidden' : 'flex'}
            p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              
              {/* Social Icons in Mobile Menu */}
              <div className="flex gap-6 mt-4">
                <a href="https://github.com/FrancGarcia" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="GitHub" className="w-8 h-8 transform hover:scale-110 transition duration-300 cursor-pointer" />
                </a>
                
                <a href="mailto:frgarciaa1@gmail.com">
                  <img src={mail} alt="Email" className="w-8 h-8 transform hover:scale-110 transition duration-300 cursor-pointer filter invert brightness-200" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
