import react from 'react' ;
import { useState } from 'react'
import  Music_list from './musicComponent'

function HOME_PAGE(){

    

    return(
        
        // <div style = {{display:"inline-block"}}>
           
        //     <div className='frame'>
        //     <h1 style = {{color: "white"}}>CrossRoads</h1>
        //     </div>
            
        // </div>
        <div>
            
        
            <nav className="navbar">
              <div className="navbar-logo">
                <span style ={{color:"orange"}}>My</span><span>Cloud</span>
              </div>
              <ul className="navbar-links">
                <li><a href="/Home">Home</a></li>
                <li><a href="Music">Music</a></li>
                <li><a href="Photos">Photos</a></li>
                <li><a href="Movies">Movies</a></li>
              </ul>
            </nav>
            
                {/* <Music_list/> */}
             

        </div>
          


        
)
}

export default HOME_PAGE