 import { MDBDataTableV5 } from 'mdbreact';
import React, { useState } from "react";
import axios from "axios";
const Poruke = () => {
    const [poruke,setPoruke] = useState([]);
      axios.get("api/poruke").then((res)=>{
      //console.log(res.data[0]);
      setPoruke(res.data[0]);
      console.log(poruke)
    })  .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
  
    });
    console.log(poruke)
      const [datatable, setDatatable] = React.useState({
        columns: [
          {
            label: 'Ime',
            field: 'name',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Name',
            },
          },
          {
            label: 'Email',
            field: 'email',
            width: 200,
          },
          {
            label: 'Poruka',
            field: 'poruka',
            width: 270,
          }
           
        ],
        rows:  poruke.map(p=>{
            return{
                name: p.ime,
                email: p.email,
                poruka: p.poruka
            }
            

        })
       
    })      
        
    
      return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
    }
 
export default Poruke