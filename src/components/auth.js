import React from 'react';
import { Route, Redirect } from 'react-router-dom';




const  PrivateRoute = ({component, ...rest }) => {
  let token = JSON.parse(localStorage.getItem('auth'));
  console.log(token);
 let RenderComponent = component
   return(

    <Route {...rest} render={props => {
         token !== null ?(            
            //return 
             <RenderComponent {...props} />)
             :
             (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
        
             
          }} />
   );
    
};



export default PrivateRoute;