import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Table(props) {
   
  return (
    <div className="">
       {
          props.getData.length>0?
          (
            props.getData.map(e=>              
                <div className="each-task" key={e._id}>  
                      <div>                                  
                        {e.task}
                        </div>
                        <div> 
                        {e.type}
                        </div>
                        <div> 
                        {e.describe}
                        </div>
                        <div> 
                        {e.time} 
                       </div>
                    <div> 
                    <button id="remove" className="btn btn-info" onClick={(event)=>{
                      props.sinData(e);
                    }}
                    >Edit</button>
                    </div> 
                    <div> 
                    <button id="remove" className="btn btn-danger"
                    onClick={(event)=>{
                      props.del(e);
                    }}>Delete</button>
                    </div> 

                </div>          
            )
          ) : 
          (
            <div>no data</div>
          )             
       }     
      </div>
  );
}

export default Table;
