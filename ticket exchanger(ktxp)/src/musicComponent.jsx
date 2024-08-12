import react from 'react' ;
import { useState } from 'react'

function Music_list(){

    const[music , setmusic] = useState(["Tum hi ho" , 'Espresso' , 'West Coast', 'Young and beautifull', 'Espresso' , 'West Coast', 'Young and beautifull', 'Espresso' , 'West Coast', 'Young and beautifull' ])


    const m = music.map((song)=> <li className='music_render'>{song} <br style={{color: 'white'}} /></li>)

    return(
        
       <ul style={{color:'white'}} className='music_render_box' >{m}</ul>


        
)
}

export default  Music_list