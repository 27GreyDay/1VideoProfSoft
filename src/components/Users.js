import React from "react";
import User from "./User";

const Users = props => {
  
  if (props.users.length > 0)
    return (
      <>
        {props.users.map(el => (
          <User  key={el.id} user={el} onDelete={props.onDelete} onEdit={props.onEdit}/>
        ))}
      </>
    );
  else 
    return (
      <div className="user">
        <h3>Пользователей нет</h3>
      </div>
    );
}
 
export default Users;