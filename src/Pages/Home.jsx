import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { ThreeCircles } from 'react-loader-spinner'

import useLazyLoad from '../useLazyLoad';
import UserCard from '../Components/UserCard'

const NUM_PER_PAGE = 3;
const TOTAL_PAGE = 4;

const Home = () => {
    const [allUser, setAllUser] = useState([])
    const triggerRef = useRef(null)
    
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((res)=> res.json())
        .then((data)=> {setAllUser(data)})
        .catch((err) => console.log(err))
    },[])

    const onGrabData = (currentPage) =>{
        return new Promise((resolve) => {
            setTimeout(() => {
                const userData = allUser.slice(
                    ((currentPage - 1)%TOTAL_PAGE) * NUM_PER_PAGE,
                    NUM_PER_PAGE * (currentPage%TOTAL_PAGE)
                );
                console.log(userData);
                resolve(userData);
            }, 1000);
        });
    }

    const {data, loading} = useLazyLoad({triggerRef, onGrabData})


  return (
    <>
        <div>
            {
                data.map((user)=>(
                    <UserCard key={user.id} user={user}/>
                ))
            }
        </div>
        <div ref={triggerRef} className={clsx("trigger", {visible:loading})}>
            <div className='spinnerWrapper'>
            <ThreeCircles
                color='#00bfff'
                height={80}
                width={200}
                className='spinner'
            />
            </div>
        </div>
    </>
  )
}

export default Home