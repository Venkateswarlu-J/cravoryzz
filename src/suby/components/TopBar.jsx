import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
        <div className="companyTitle">
            <Link to='/' className='link'>
            <h2>CravoryZZ</h2>
            </Link>
        </div>
        <div className="searchBar">
            <input type="text" placeholder='Tasty food is just a search away...' />
        </div>
        <div className="userAuth">
        <Link to="/firmcollections" className='link'>Restaurents</Link>
        <Link to="/contactus" className='link'>ContactUs</Link>
        <Link to="/login" className="authButton">Login</Link>
        <span> / </span>
        <Link to="/register" className="authButton">Sign Up</Link>
        </div>
   </section>
  )
}

export default TopBar