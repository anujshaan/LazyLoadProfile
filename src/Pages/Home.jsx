import React, { useEffect, useState } from 'react'
import UserCard from '../Components/UserCard'

const Home = () => {
    const [allUser, setAllUser] = useState([])
    
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response)=> response.json())
        .then((json)=> {setAllUser(json)})
    },[])
  return (
    <div>
        {
            allUser.map((user)=>(
                <UserCard key={user.id} user={user}/>
            ))
        }
    </div>
  )
}

export default Home