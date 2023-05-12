import React from 'react';
const ContactCard=(props)=>{
    console.log('contact card called here ');
const {id,name,email}=props.contact;
return (
    <>
        <div>
            {name}
        </div>
        <div>
            {email}
        </div>
        <i className="trash alternate outline icon" onClick={()=>{props.clickHandler(id)}}></i>
        </>
)
}
export default ContactCard;