import react from 'react' ;
import { useState } from 'react'

function Login(){
    const[user_name, setuser_name] = useState("Username")
    const[password, set_password] = useState("password")
    function login_funtion(){
        
        document.getElementById('1').value = ""
        document.getElementById('2').value = ""


    }
    return (
     <div>
     <  h1>Login to KTXP Portal</h1>
        <div className='mainbox'>
            {/* hheehe */}
            <span className='welcome'>WELCOME</span>
            <input type="text" className='input1' id="1" placeholder={user_name}/>
            <input type="text" className='input2' id ='2' style={{ top : '48%'}} placeholder='password'/>
            <button className='login' onClick={login_funtion}>Login</button>
            <div className='second_box'></div>
        </div>
    </div>

    )
}

export default Login