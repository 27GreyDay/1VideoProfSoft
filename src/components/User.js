import React, { useState} from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser";

const User = props => {
  const [editForm, setEditForm] = useState(false);

  return ( 
  <div className="user" >
    <IoCloseCircleSharp onClick={() => props.onDelete(props.user.id)} className="delete-icon"/>
    <IoHammerSharp onClick={() => {
      setEditForm(!editForm)
    }} className="edit-icon"/>
    <h3>{props.user.firstname} {props.user.lastname}</h3>
    <p>{props.user.bio}</p>
    <b>{props.user.isHappy ? 'Счастлив)' : 'Депрессия('}</b>

    {editForm && <AddUser addUser={props.onEdit}/>}
  </div> );
}
 
export default User;