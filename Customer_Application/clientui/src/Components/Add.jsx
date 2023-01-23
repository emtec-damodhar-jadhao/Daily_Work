import React from 'react';
import Form from './Form';

function Add() {

    let template = {
        Title : "Add New Customer",
        fields:[
            {
            title: "Name",
            type:"text",
            name:"Name"
            },
            {
                title: "CustomerCode",
                type:"text",
                name:"CustomerCode"
            },
            {
                title: "PostalCode",
                type:"number",
                name:"PostalCode"
            },
            {
                title: "Landmark",
                type:"text",
                name:"landmark"
            },
            {
                title: "CityId",
                type:"number",
                name:"CityID"
            },
            {
                title: "Address",
                type:"text",
                name:"Address"
            }
        
        ]
    }

  return (
    <>
    <Form template={template} />
    
    </>
  )
}

export default Add