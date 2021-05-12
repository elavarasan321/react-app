import React from "react";


function Table(props) {
   
  return (
    <div className="row">
       {
          props.getData.length>0?
          (
            props.getData.map(e=> 
              <div className="col-sm-3" key={e._id}>    
              <div className="card" style={{width: "18rem"}}>        
                <div className="" >  
                      <div className="card-header">                                  
                        {e.task}
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item"> 
                        {e.type}
                        </li>
                        <li className="list-group-item"> 
                        {e.describe}
                        </li>
                        <li className="list-group-item"> 
                        {e.time} 
                       </li>
                        
                       <li className="list-group-item">                 
                    <button id="remove" className="btn btn-info" onClick={(event)=>{
                      props.sinData(e);
                    }}
                    >Edit</button>
                    </li > 
                    <li className="list-group-item"> 
                    <button id="remove" className="btn btn-danger"
                    onClick={(event)=>{
                      props.del(e);
                    }}>Delete</button>
                    </li > 
                    </ul> 
                </div> 
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
