import React from 'react';
import ContactCard from './ContactCard'
const ContactList=(props)=>{
    console.log('contactlist called here',props);
    const deleteList=(id)=>{
        console.log('delete operation of contactlist called')
        props.getContactId(id);
    }
    const renderContactList=props.contacts.map((contact) => {
        console.log('map of renderContact list called here ')
       return <ContactCard contact={contact} clickHandler={deleteList} key={contact.id}/> 
    }) ;
    return <>{renderContactList}</>
}

export default ContactList;