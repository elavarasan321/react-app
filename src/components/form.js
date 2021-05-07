import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Form(props) {

  const {handleSubmit} = props;  
    const [uid,newId] = useState("");
    const [edit,isEdit] = useState(false);
    const [task,newWork] = useState("");
    const [type,newType] = useState("");
    const [describe,newDesc] = useState("");
    
    useEffect(()=>{
      console.log(props.setForm);
       if(props.setForm.uid != null)
       {
         newId(props.setForm.uid);
         newWork(props.setForm.task);
         newType(props.setForm.type);
         newDesc(props.setForm.describe);
         isEdit(true);
        }

    },[props.setForm])

  return (
    <form onSubmit={(e)=>{e.preventDefault();
    if(!edit){handleSubmit({task, type, describe,edit});newType("");newWork("");newDesc("")}
    else{
      handleSubmit({task, type, describe,uid,edit});
     
    }
    }}>
    <div className="form-group" >
      <label >Task</label>
      <input type="text" className="form-control"  placeholder="Enter Task" required
       name="name" value={task} onChange={(e)=>newWork(e.target.value)}
      />     
    </div>
    <div className="form-group">
    <label >Task Type</label>
    <input type="text" className="form-control"  placeholder="Enter Task type" required
       name="name" value={type} onChange={(e)=>{newType(e.target.value);}}/>
    </div>
    <div className="form-group">
      <label >Description</label>
      <input type="text" className="form-control"  placeholder="Description about task" required value={describe} onChange={(e)=>newDesc(e.target.value)}/>
    </div>
    
    <button type="submit" className="btn btn-primary">{(edit)?"Update":"Save"}</button>
  </form>
  );
}

export default Form;
