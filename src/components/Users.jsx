import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUser=useLoaderData()
    const [users,setUsers]=useState(loadedUser)
    const deleteUser=(id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be delete an user!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
    .then((result)=>{
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/user/${id}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'user has been deleted.',
              'success'
          )
          const remaining=users.flter(user=>user._id !==id)
          setUsers(remaining)
          }
        })
      }
    })
    }
    return (
        <div>
            <h3>users number:{loadedUser.length}</h3>
            <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>createdAt</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     {
        users.map((user,index)=><tr key={user._id}>
        <td>{index+1}</td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user?.lastLoggedAt}</td>
        <button className="btn btn-accent" onClick={()=>deleteUser(user._id)}>delete</button>
        </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;