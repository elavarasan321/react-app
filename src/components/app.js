import React,{useEffect,useState} from "react";
import Form from "./form";
import Table from "./table";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

function App() {
  const [data,apiData] = useState("");
  const [Edit,editData] = useState("");

  const getAll=async(e)=>{
    let tasks = await axios.get("http://127.0.0.1:4000/tasks/tasks");
    apiData(tasks.data);
   
   
  }
   
    const handleSubmit =async (task)=>{ 
      if(task.edit)
      {
        const uid = task.uid;
        let edit = await axios.patch(`http://127.0.0.1:4000/tasks/tasks/${uid}`,task);
         getAll();
      }  
      else{     
        console.log(task.edit)
         let tasks = await axios.post("http://127.0.0.1:4000/tasks/tasks",task);
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
     const uid =data.uid;
    let tasks = await axios.delete(`http://127.0.0.1:4000/tasks/tasks/${uid}`);
    console.log(tasks);
    getAll(); 
 
}


  return (
    <div className="container-fluid mt-5">
      <div className="row">
          <div className="col-sm-3">
             <Form handleSubmit={handleSubmit} setForm={Edit}/>
          </div>
          <div className="col-sm-7 offset-1">
              <Table getData={data} sinData={update} del={del}/>
          </div>
          
      </div>
    </div>
  );
}

export default App;
