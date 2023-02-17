import axios from 'axios'
import { useState,useEffect } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {
const [users, setUsers] = useState()
const [updateInfo, setUpdateInfo] = useState()
const [isOpen, setIsOpen] = useState(false)

const getAllUsers = () => {
  const url ='http://users-crud.academlo.tech/users/'
  axios.get (url)
  .then(res => setUsers(res.data))
  .catch(err => console.log(err))
}

useEffect(() => {
 getAllUsers()
}, [])

const newUser = data => {
  const url ='https://users-crud.academlo.tech/users/'
  axios.post(url, data)
  .then(res => { 
    console.log(res.data)
    getAllUsers()
     })
  .catch(err => console.log(err))
}

const deleteUser = id => {
  const url =`https://users-crud.academlo.tech/users/${id}/`
  axios.delete(url)
  .then(res =>{  
    console.log(res.data)
    getAllUsers()
    })
  .catch(err => console.log(err))

}

const updateUser = (id, data) => {
  const url =`https://users-crud.academlo.tech/users/${id}/`
  axios.put(url, data)
   .then(res => {   
    console.log(res.data)
    getAllUsers()
    setUpdateInfo()
      })
   .catch(err =>console.log(err))
}

const  handleOpen = () => setIsOpen(true)

const  handleClose = () => setIsOpen(false)


  return (
    <div className="app">
    <h1 className='app__text'>USER APP</h1>
    <button  onClick={handleOpen}    className='app__btn-form'><i className='bx bxs-user-pin' ></i> New User</button>
    <div  className={` app__form  ${isOpen && 'app__form-visible'} `}>
    <FormUser 
       newUser={newUser}
       updateInfo={updateInfo}
       updateUser={updateUser}
       handleClose={handleClose}
       setUpdateInfo={setUpdateInfo}
      />
      </div>
      <div>
        {
          users?.map(user => (
          <UserCard 
           key={user.id}
           user={user}  
           deleteUser = {deleteUser}
           setUpdateInfo={setUpdateInfo}
           handleOpen={handleOpen}
            />
          )) 
        }
        <div className='app__footer'>
          <span>© 2023 All rights reserved to Jamar Masias.</span>
        </div>
      </div>
    </div>
  )
}

export default App
