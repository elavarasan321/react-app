import React,{useEffect,useState} from "react";

import FormComponent from "./form";
import Table from "./table";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
  Link,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import SigninForm from "./signin";
import SignupForm from "./signup";
import instance from "./api"
import PrivateRoute from "./auth";


function App() {
  const [data,apiData] = useState("");
  const [Edit,editData] = useState("");
 


  const getAll=async(e)=>{
    let tasks = await instance.get(`/tasks/tasks`);
    apiData(tasks.data);
   
   
  }
   
    const handleSubmit =async (task)=>{ 
      if(task.edit)
      {
        const taskid = task._id;
        console.log(taskid);
        let edit = await instance.patch(`/tasks/tasks/${taskid}`,task);
        console.log(edit.data);
         getAll();
      }  
      else{     
        console.log(task.edit)
         let tasks = await instance.post(`/tasks/tasks`,task);
         getAll();
      }
    }    
    

useEffect(()=>{
  
  getAll()
},[])


const update=(data)=>{
 editData(data);
}

const del=async(data)=>{
     const taskid =data._id;
    let tasks = await instance.delete(`/tasks/tasks/${taskid}`);
    console.log(tasks);
    getAll(); 
 
}

const SignIn = async (auth)=>{ 
     
  let tasks = await instance.post(`user/login`,auth);
  
  if(tasks.data){
      localStorage.setItem('auth',JSON.stringify(tasks.data));
     
  } 
   
 
} 
const SignUp = async (auth)=>{ 
     
  let tasks = await instance.post(`/user/signup`,auth);
  console.log(tasks.data);    
 
} 
 


  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg bg-dark mb-3">
      <ul className="navbar nav">
          <li className="nav-item">
          <Link className="navbar-brand text-warning" to="/">Task Manager</Link>
          </li>
      </ul>
        <ul className="navbar nav ml-auto">
         
          <li className="nav-item">
          <Link className="nav-link active bg-white text-dark rounded" to="/form">Form</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link text-white" to="/table">Table</Link>
          </li> 
        </ul> 
      </nav>   

    
      <Switch>
          
      
        <Route exact path="/login"> 
        <div className="container">
          <SigninForm signIn={SignIn} />
          </div>
        </Route>
        <Route exact path="/signup"> 
        <div className="container">
          <SignupForm signup={SignUp} />
          </div>
        </Route>           
        <PrivateRoute exact path="/form" component={
          
        <FormComponent handleSubmit={handleSubmit} setForm={Edit}/>
        }/>
    
       
        <Route exact path="/table">
          <div className="container">
        <Table getData={data} sinData={update} del={del}/>
          </div>
        </Route>
        
      
      </Switch>
    </div>
  </Router>

    // <div className="container-fluid mt-5">
    //   <div className="row">
    //       <div className="col-sm-3">
    //          <Form handleSubmit={handleSubmit} setForm={Edit}/>
    //       </div>
    //       <div className="col-sm-6 offset-1">
    //           <Table getData={data} sinData={update} del={del}/>
    //       </div>
                 
    //   </div>
    // </div>
  );
}

export default App;
