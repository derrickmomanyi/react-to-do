import React, {useState} from "react";

function LoginForm(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [finalData, setFinalData] = useState({})
    const [validation, setValidation] = useState('');


    function handleEmail(e){
        setEmail(() => e.target.value);
    }
    function handlePassword(e){
        setPassword(() => e.target.value);
    }

        function handleSubmit(e){
            e.preventDefault();

            

        
        if( password.length < 6){
            setValidation(()=> alert('Password should not be less than 6 characters'))
        }
        else if(!email.includes("@")){
            setValidation(()=> alert('email must include the @ symbol'))
        }
        else if(email==="" && password ===""){
            setValidation(()=> alert('Please input your email and password'))
        }        
        else{
            setValidation("")
            let finalData = {email : email, password : password}
            
            setFinalData(()=> console.log(finalData))
        }
        }
   
    return (
        <>
          <form onSubmit = {handleSubmit}>
        <label>
            Email:
            <input onChange = {handleEmail} value= {email} type="text" name="email" />
        </label>
        <label>
            Password:
            <input onChange = {handlePassword} value= {password} type="password" name="password" />
        </label>
        
            
        <input type="submit" value="Submit" />
    </form>
        </>
    )
}

export default LoginForm;