import React from 'react'
import {Link} from 'react-router-dom';


 const Navbar =() => {
    return (


        <nav class="navbar fixed-top navbar-expand-lg bg " style={{backgroundColor: "rgb(255, 115, 0)"}}>
            <div class="container-fluid">
                <Link class="navbar-brand " to="/">
                    NewsDose</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav" >
                    <li class="nav-item ">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link >
                    </li>
                    
                    <li className='nav-item '> 
                       <Link  className="nav-link" to="/science">Science</Link >
                    </li>
                    <li className='nav-item '>
                       <Link  className="nav-link" to="/general">General</Link >
                    </li>
                    <li className='nav-item '>
                       <Link  className="nav-link" to="/technology">Technology</Link >
                    </li>
                    <li className='nav-item  '>
                       <Link  className="nav-link" to="/sports">Sports</Link >
                    </li>
                    <li className='nav-item '>
                       <Link  className="nav-link" to="/health">Health</Link >
                    </li>
                    <li className='nav-item '>
                       <Link  className="nav-link" to="/entertainment">Entertainment</Link >
                    </li>
                </ul>
                                        
                    </div>
            </div>  
     </nav>
        

    )
}
export default Navbar