import React, { useState } from "react";

const AddUser = props => {
  const [newUser, setNewUser] = useState({
    id: '',
    firstname: '',
    lastname: '',
    bio: '',
    age: '',
    isHappy: false
  });

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser, [e.target.name]: e.target.value
    });
  };
  
  const addUser = () => {
    props.setUsers([...props.users, newUser]);
    setNewUser({
      id: props.users.length + 1,
      firstname: '',
      lastname: '',
      bio: '',
      age: '',
      isHappy: false
    });
  };
  
  return ( 
    <form>
      <input placeholder="Имя" name="firstname" value={newUser.firstname} onChange={handleInputChange}/>
      <input placeholder="Фамилия" name="lastname" value={newUser.lastname} onChange={handleInputChange}/>
      <textarea placeholder="Биография" name="bio" value={newUser.bio} onChange={handleInputChange}></textarea>
      <input placeholder="Возраст" name="age" value={newUser.age} onChange={handleInputChange}/>
      <label htmlFor="isHappy">Счастлив?</label>
      <input type="checkbox" name="isHappy" id="isHappy" checked={newUser.isHappy} onChange={(e) => { setNewUser({...newUser, [e.target.name]: e.target.checked })}}/>
      <button type="button" onClick={addUser} >Добавить</button>
    </form>
  );
}
 
export default AddUser;