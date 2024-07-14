import react from 'react' ;
import { useState } from 'react'

function Login(){
    const[user_name, setuser_name] = useState("")
    const[password, set_password] = useState("")
    async function login_funtion(){
        let data =  {
        username :  user_name,
        password : password
        }
       
        const url = "http://127.0.0.1:8080/login"
        const options = {
            method : "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(data)

        }
        const response  = await fetch(url,options)

        if (response.status!==200){
            console.log("data not sent")
            
       
        }
        else{
            console.log("data send")
        }

        setuser_name("");
        set_password("");

    }
    return (
     <div>
     <  h1>Login to KTXP Portal</h1>
        <div className='mainbox'>
            {/* hheehe */}
            <span className='welcome'>WELCOME</span>
            <input type="text" className='input1' id="1" placeholder="user_name" value ={user_name} onChange={(e)=>( setuser_name(e.target.value))}/>
            <input type="text" className='input2' id ='2' style={{ top : '48%'}} placeholder='password' value = {password} onChange={(e)=>( set_password(e.target.value))}/>
            <button type='submit' className='login' onClick={login_funtion}>Login</button>
            <div className='second_box'></div>
        </div>
    </div>

    )
}

export default Login