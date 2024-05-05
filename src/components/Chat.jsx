import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import Messages from './Messages';
import Input from './Input'; 
import { ChatContext } from "../context/ChatContext";
import { useContext } from 'react';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <FaCameraRetro size={24} />
        <IoMdPersonAdd size={24} />
        <IoIosMore size={24} />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
