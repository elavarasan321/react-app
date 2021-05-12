import React,{useState} from "react";


function SigninForm(props) {
   
    const {signIn} = props;  
    
    const [email,userEmail] = useState("");
    const [password,userPassword] = useState("");
    

  return (
      <div>
      <h1>Signin</h1>
    <form onSubmit={(e)=>{e.preventDefault();
        signIn({email,password})
        userPassword("");userEmail("")
        ;}}>
    
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
    <button type="submit" className="btn btn-success">Sign-in</button>
  </form>
  </div>
  );
}

export default SigninForm;
