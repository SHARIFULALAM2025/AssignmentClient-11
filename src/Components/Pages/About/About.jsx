import React, {  } from 'react';
import TablePage from '../TablePage';

const About = () => {
     const heading = ['sL', 'name', 'id', 'distract', 'division', 'roll','Action']
     const data = [
       {
         name: 'magila',
         id: 33,
         distract: 'br',
         division: 'bor',
         roll: 23,
         mother: 'mrei',
         father: 'atiar',
       },
       {
         name: 'kokila',
         id: 22333,
         distract: 'br',
         division: 'bor',
         roll: 23,
         mother: 'mrei',
         father: 'atiar',
       },
       {
         name: 'jamila',
         id: 23433,
         distract: 'br',
         division: 'bor',
         roll: 23,
         mother: 'mrei',
         father: 'atiar',
       },
       {
         name: 'kabila',
         id: 29933,
         distract: 'br',
         division: 'bor',
         roll: 20,
         mother: 'mrei',
         father: 'atiar',
       },
    ]
    const deleteUser = (row) => {
        console.log('delete button click',row.id);



  }
  const editUser = (row) => {
    console.log('edit button click',row);


  }

    return (
      <div>
        <h1 className="">this is about page</h1>
        <TablePage
          heading={heading}
          tableData={data}
          OnDelete={deleteUser}
          OnEdit={editUser}
        ></TablePage>
      </div>
    )
};

export default About;