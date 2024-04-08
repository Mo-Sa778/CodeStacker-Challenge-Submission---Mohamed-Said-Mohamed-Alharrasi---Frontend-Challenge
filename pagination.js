import React from 'react';
import "./style.css";

export default function Pagination( {gotoNextPage, gotoPrevPage, gotoSpecificPage} ) {
  return (
    <div className='nextPrevButtons'>
      {gotoPrevPage && <button onClick={gotoPrevPage} style={{margin: '5px'}}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage} style={{margin: '5px'}}>Next</button>}
          </div>
  )
}
