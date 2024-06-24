import { useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
const [open,setOpen] = useState(false);
const [text,setText] = useState("");

const handleEmoji = e => {
    setText(prev => prev + e.emoji);
    setOpen(false)
};

    return (
        <div className='chat'>

            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="avatar"></img>
                    <div className="texts">
                        <span>User Name</span>
                        <p>User Description Area.</p>
                    </div>
                </div>

                <div className="icons">

                <img src="./phone.png" alt="phone"></img>
                <img src="./video.png" alt="video"></img>
                <img src="./info.png" alt="info"></img>

                </div>
            </div>

            <div className="center"></div>

            <div className="bottom">

                <div className="icons">
                    <img src="./img.png" alt="img"></img>
                    <img src="./camera.png" alt="camera"></img>
                    <img src="./mic.png" alt="mic"></img>
                </div>

                <input type="text" placeholder="Type a message..."
                value={text} 
                onChange={(e) => setText(e.target.value)}></input>
                
                <div className="emoji">
                    <img src="./emoji.png" alt="emoji" onClick={() => setOpen((prev) => !prev)}></img>
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>

                <button className="sendButton">Send</button>

            </div>
        </div>
    )
}  

export default Chat