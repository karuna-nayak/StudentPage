import React from 'react';
import './card-list.styles.css';

export const CardList = props =>(
     <div className='card-list'>
          {props.students.map(students => (
                    <h1 key={ students.studentid }> { students.firstname }{ students.lastname } {students.email} </h1>
          ))}
     </div>
)
     
