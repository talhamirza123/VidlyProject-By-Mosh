import React from 'react';

const ListGroup = (props) => {
    
    const { items , onitemSelect, selectedGen} = props;
    
    
    return <ul class="list-group">
    {items.map (item => 
          
          <li onClick={() => onitemSelect(item)} 
           key={item._id} 
           class={ item === selectedGen 
                  ? 
                  "list-group-item active" 
                  :
                  "list-group-item"}>{item.name}</li>      
                
                )}
   
  </ul>
    
}

export default ListGroup