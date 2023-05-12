import React, { useState } from 'react';

const AddContact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  console.log('add contact handler page', props);
  const handleName = (e) => {
    console.log('handlename called haere')
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '') {
      alert('All fields are mandatory');
      return;
    }
    props.addContactHandler({ name, email });
    setName('');
    setEmail('');

  };

  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} placeholder="Enter name" onChange={handleName} />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input type="text" value={email} placeholder="Enter email" onChange={handleEmail} />
        </div>
        <br />
        <div>
          <button>Add</button>
        </div>
      </form>
    </>
  );
};

export default AddContact;
