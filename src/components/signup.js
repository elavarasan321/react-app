import React,{useState} from "react";


function SignupForm(props) {
   
    const {signup} = props;  
    
    const [email,userEmail] = useState("");
    const [password,userPassword] = useState("");
    const [username,userName] = useState("");

  return (
      <div><h1>Signup</h1>
    <form onSubmit={(e)=>{e.preventDefault();
        signup({email,password,username});
        userName("");userPassword("");userEmail("")}}>
    <div className="form-group" >
      <label >Username</label>
      <input type="text" className="form-control"  placeholder="Enter email" 
        value={username} onChange={(e)=>userName(e.target.value)}
      />     
    </div>
    <div className="form-group" >
      <label >email</label>
      <input type="email" className="form-control"  placeholder="Enter email" 
        value={email} onChange={(e)=>userEmail(e.target.value)}
      />     
    </div>
    <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control"  placeholder="Enter Password" 
        value={password} onChange={(e)=>userPassword(e.target.value)}/>
    </div>    
    <button type="submit" className="btn btn-success">Sign-up</button>
  </form>
  </div>
  );
}

export default SignupForm;
