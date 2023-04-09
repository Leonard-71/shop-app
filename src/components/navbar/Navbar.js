import React, {useState, useEffect} from 'react'
import './Navbar.css'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }
  }, [])





  return (
    <nav>
      <div>
        <button onClick={toggleNav} className="btn  fas fa-bars" style={{ float: "right" }}></button>
      </div>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
       <li><a href="/products">Crazy Shop &nbsp;&nbsp;</a></li>
       <li><a href="/products" > Produsts</a></li>
       <li><a  href="/about" > About</a></li>
       <li style={{ float: "right" }}> <a  href="/shop"> Shop</a></li>
  
      </ul>
      )}
   
      
    </nav>
  )
}

export default Navbar