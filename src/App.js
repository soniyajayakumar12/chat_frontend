import { useState, useEffect, useRef, useCallback } from "react";
import io from "socket.io-client";
import Input from "./components/input";
import Button from "./components/button";
import { IoMdSend } from "react-icons/io";

const socket =  io.connect("http://localhost:5000/");

function App() {
  const [userMsg,setUsrMsg] = useState("");
  const [receivedMsg,setReceivedMsg] = useState([]);
  const msgTextBox = useRef(null);

  const sendMsg=(msg)=>{
    socket.emit("message",msg)
  }
  
    useEffect(() => {
      socket.on("receivedMsg",(msg)=>{
        console.log(msg)
        setReceivedMsg((data)=>[...data,msg]);
      });
    }, []);

  return (
    <div className="bg-blue">
      <div className="w-full h-screen bg-blue-400 p-4">
        {receivedMsg.map((data,index)=>{
          return(
            <div key={index}>
              <span>{data}</span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-row fixed bottom-4 justify-center align-middle w-full">
        <Input type="text" value={userMsg} onChange={(event)=>{
          setUsrMsg(event.target.value)
        }} className="w-full border-2 border-black ml-4 px-4 rounded-xl" ref={msgTextBox}/>
        <Button onClick={()=>{
          sendMsg(msgTextBox.current.value)
          setUsrMsg("");
        }} className="p-2"><IoMdSend /></Button>
      </div>
    </div>
  );
}

export default App;
