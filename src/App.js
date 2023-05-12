import React, {useState, useEffect} from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import AddContact from './components/AddContact';
import Header from './components/Header';
import ContactList from './components/ContactList';
function App() {
  console.log('app page');
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] =useState([]);
  const addContactHandler=(contact)=>{
    console.log('addContacthandler calls', contact);
    setContacts([...contacts,{id:uuidv4(),...contact}])
    console.log('after clicking add ', contact)
  };

  const deleteList=(id)=>{
    console.log('delete list of app.js called here')
    const newContactList=contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log('1st useeffect when empty array ')
    if(retrieveContacts) setContacts(retrieveContacts)
  },[])
  useEffect(()=>{
    console.log('2nd useeffect when contacts array change ')
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts])

  return (
    <div className="App">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={deleteList}/>
    </div>
  );
}

export default App;
