import React from 'react';
import Header from '../Header';
import './style.css'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
        <Header />
        <div className="Layout">
        {props.children}
        </div>
        
    </div>
   )

 }

export default Layout