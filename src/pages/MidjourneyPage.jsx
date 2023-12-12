import React, { useState, useEffect } from 'react'
import Midjourney from '../components/Midjourney/Midjourney'
import Gpt from '../components/Gpt/Gpt'
import NavigationsMidj from '../components/NavigationsMidj/NavigationsMidj'
import ChatBlock from '../components/ChatBlock/ChatBlock'
import MessageAdd from '../components/MessageAdd/MessageAdd'
import SendMessage from '../images/chat/sendMes.svg'
import GptUser from '../images/chat/mi_ic.png';
import GptAva from '../images/chat/chatgpt_ic.png'
import ChatBlockHead from '../components/ChatBlockHead/ChatBlockHead'
import MidjourneyTabs from '../components/MidjourneyTabs/MidjourneyTabs'
import ModalDelete from '../components/ModelDelete/ModalDelete'
import { useParams } from 'react-router-dom';
import { useRef } from 'react'

const MidjourneyPage = ({ folders, chats }) => {
    const { chatId } = useParams();
   
    const scrollBottom = useRef();

    const [messages, setMessages] = useState(
        [
            // {
            //     messageText: 'Что такие Маркетплейсы ?',
            //     avatar: GptUser,
            //     mine: true
            // },
            // {
            //     messageText: 'Я не могу найти информации о конкретном "Uzum Market". Можете уточнить, о какой стране или регионе идет речь?',
            //     avatar: GptAva,
            //     mine: false
            // }
        ]
    )
    const [messagesWidth, setMessagesWidth] = useState(messages.length)


    setTimeout(() => {
        lastMessageScroll('smooth');
        if (messages.length != messagesWidth) lastMessageScroll('smooth');
    }, [])




    function lastMessageScroll(b) {

        if (!scrollBottom.current) return;

        scrollBottom.current.scrollIntoView({
            behavior: b || 'auto',
            block: 'end',
        });
    }



    function newChatName(e) {
        if (messages.length == 0) {

            fetch(`http://mindl.in:8000/api/v1/chatsession/${window.location.href.split('/')[window.location.href.split('/').length - 1]}/`, {

                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Token " + "5634c40cd049a1f7fae91b257803f6db341daba3"
                },
                body: JSON.stringify({
                    "name": e.substring(0, 15)
                })
            }).then(response => response.json())
                .then(data => console.log(data));
        }
    }


    return (
        <div>
            <div className="content-page ">
                <div className="content">

                    <div className="container-back-mid">
                        {messages.length && (
                            <ChatBlockHead />
                        )}

                    </div>
                    <div className="">

                    </div>
                    <div className="container-back-mid">
                        {!messages.length && (
                            <NavigationsMidj />
                        )}
                    </div>

                    <div className="container-back-mid">
                        {!messages.length && (
                            <Gpt />
                        )}
                    </div>

                    <ChatBlock setMessages={setMessages} chatId={chatId} newChatName={newChatName} messages={messages} scrollBottom={scrollBottom} />
                    <MessageAdd chatId={chatId} setMessages={setMessages} messages={messages} newChatName={newChatName} />
                </div>
            </div>

        </div>
    )
}

export default MidjourneyPage