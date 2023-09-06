import React from 'react'
import style from './chatbox.module.css'
import ChatNav from './ChatNav'
import Stories from './stories/Stories'
import FriendChat from './friend-chat/FriendChat'
import MessageBox from './message-box/MessageBox'


const ChatBox = () => {
  return (
    <div>
      <ChatNav/>
      <div className={style.chat__box__container}>
        <div className={style.flex__container}>
            <div className={style.left__container}>
              <Stories/>
              <FriendChat/>
            </div>
            <div className={style.right__container}>
              <MessageBox/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBox