import '../style/chat.scss';
import {useEffect, useReducer, useState} from "react";
import {getChatMessages} from "../services/chat-service";
import {chatReducer} from "../reducers/chat-reducer";

export const Chat = () => {
  const [messages, dispatch] = useReducer(chatReducer, []);
  const [input, setInput] = useState("");
  const [refresh, setRefresh] = useState(0);

  const getMessages = async () => {
    const responseMessages = await getChatMessages();
    dispatch({type: 'init', messages: responseMessages});
  }

  useEffect(() => {
    getMessages();
    return () => console.log("Chat is closed");
  }, [refresh]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  }

  const onSendClick = () => {
    dispatch({type: 'add-message', message: input});
    setInput('');
  };

  const onRefreshClick = () => {
    setRefresh((s) => s + 1);
  };

  return (
    <div className='chat-container'>
      <h1 className='chat-title'>PW Chat</h1>
      <div className='chat-messages-container'>
        {messages.map((message, idx) => <div key={idx}>{message.message}</div>)}
      </div>
      <button onClick={onRefreshClick}>Refresh</button>-
      <div className='chat-input-container'>
        <input type='text' value={input} onChange={onInputChange}/> <button onClick={onSendClick}>Send</button>
      </div>
    </div>
  )
};