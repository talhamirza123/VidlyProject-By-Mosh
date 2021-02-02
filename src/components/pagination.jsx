import React from 'react';
import _ from 'lodash';

  const Pagination = props => {
  
  // const { itemsCount, pageSize } = props;
  
  // const pageCount = itemsCount / pageSize; 
  // const pages = _.range(1, pageCount + 1);
    
     const {itemCount, pageSize} = props;
    
     const pageCount = itemCount / pageSize;
    
     const pages = _.range(1, pageCount + 1 );
    
    return( 
           <nav>
    <ul className="pagination">
    {pages.map(page => (
    <li key={page} className="page-item">
    <a  className="page-link">{page}</a>
    </li> 
    ))}
  </ul>
  </nav>
  
  // <nav>
  // <ul className="pagination">
  // <li className="page-item">
  // <a className="page-link">4</a>
  // </li>
  // </ul>
  // </nav>
  
    );
}
 
export default Pagination;