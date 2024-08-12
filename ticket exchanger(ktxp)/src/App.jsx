import { useState } from 'react'

import './App.css'
import './index.css';

import Login from './login';
import ImageSlider from './slider';

import HOME_PAGE from './main_page';
import  Music_list from './musicComponent'
import DisplayAnImage from './photo_component'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';


const number = 6

// const renderHomePages = () => {
//       let pages = [];
//       for (let i = 0; i < number; i++) {
//         pages.push(<HOME_PAGE key={i} />);
//       }
//       return pages;}


const router = createBrowserRouter([{
  path : '/',
  element : <Login/>
  
},{ path : '/Music',
element : (<><HOME_PAGE/><Music_list/></>)},
{
  path : '/Home',
  element :<HOME_PAGE/>

  
},{ path : '/Photos',
  element : (<><HOME_PAGE/><DisplayAnImage/></>)}])


function App(){
  
const[category , setcategory] = useState("Music")
 return (
   
    // <Login/>
    // <div>
    // {/* <ImageSlider/> */}
    // {/* {renderHomePages()} */}
    // <HOME_PAGE/>
    // <span className='category' >{category}</span>
    // <Music_list/>
    
    // </div>
    <RouterProvider router = {router}/>


 )
}


export default App
