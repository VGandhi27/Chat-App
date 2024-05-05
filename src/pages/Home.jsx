import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
const Home = () => {
  return (
    <div className="home">
        <div className="containers">
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home
