import React from 'react'
import {Link,NavLink} from 'react-router-dom'
//NavLink same like Link but  add class 
//  if we want to change the className frome active to Mohammed we can use >>  activeClassName="mohammed"
function Nav() {
    return (
        <div className='navbar'>
            <div className='container'>
                <a href='#' className='logo'> logo</a>
                <ul>
                    
                    <NavLink exact to='/'> Home</NavLink> 
                    <NavLink to='/About'>About</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </ul>
            </div>
           
        </div>
    )
}

export default Nav
