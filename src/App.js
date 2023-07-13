import React, { useState } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";


const App = () => {
  const [users, setUsers] = useState(
    [
      {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        age: 25,
        isHappy: true
      },
      {
        id: 2,
        firstname: "Jane",
        lastname: "Smith",
        bio: "Nulla facilisi. Integer nec metus at mi fermentum cursus.",
        age: 30,
        isHappy: false
      },
      {
        id: 3,
        firstname: "Michael",
        lastname: "Johnson",
        bio: "Sed at mauris id lectus lacinia tincidunt.",
        age: 35,
        isHappy: true
      },
    ]
  )

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUser = (user) => {
    console.log(user)
  }

  

  return ( 
    <div >
      <Header title='Список пользователей'/>
      <main>
        <Users users={users} onDelete={handleDeleteUser} onEdit={editUser}/>
      </main>
      <aside>
        <AddUser users={users} setUsers={setUsers}/>
      </aside>
    </div> 
  );
}
 
export default App;