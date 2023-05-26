import React, { useState } from "react";

function LoginForm() {
  const  [username, setUsername] = useState ("");
  const  [password, setPassword] = useState ("");
  const  [disabled, setDisabled] = useState (false);

  function handleUsernameChange (e){
    setUsername(e.target.value)
  };

  function handlePasswordChange (e){
    setPassword(e.target.value)
  };

  function handleSubmit (e){
    e.preventDefault()

  };
  // function handleDisabled (){
    if (username.value && password.value === ""){
      return setDisabled (false)
    }
  //  };

   return (
    <form>
      <label> Enter your Username: </label> <br/>
      <input type= "text" 
      placeholder = "username" 
      id ="username-input " 
      value = {username}
      required="true"
      onChange ={handleUsernameChange}>
      </input> 
      <br/>  <br/>

      <label>Enter your Password </label><br/>
      <input type= "password" 
      placeholder = "password" 
      id ="password-input "
      value = {password}
      required="true"
      onChange ={handlePasswordChange}> 
      </input>
      <br/>  <br/>
      <button type= "submit" id= "login-button" onSubmit = {handleSubmit} disabled ={disabled}>Log In</button>
    </form>
    
  );
}

export default LoginForm;
