import { useEffect, useRef, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
const [open,setOpen] = useState(false);
const [text,setText] = useState("");

const endRef = useRef(null)

useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"})

},[])




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
                        <span>Rawn Kelly</span>
                        <p>CS Major @ FSU</p>
                    </div>
                </div>

                <div className="icons">

                <img src="./phone.png" alt="phone"></img>
                <img src="./video.png" alt="video"></img>
                <img src="./info.png" alt="info"></img>

                </div>
            </div>

            <div className="center">

                <div className="message">
                    <img src="./avatar.png" alt="avatar"/>
                    <div className="texts">
                        <p>Hey did you watch the game last night?</p>
                        <span>12 min ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                        <p>Which game?, NBA, NFL...</p>
                        <span>9 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="avatar"/>
                    <div className="texts">
                        <p>Lakers vs Celtics</p>
                        <span>7 min ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                        <p>Nah I was at work, who won?</p>
                        <span>6 min ago</span>
                    </div>
                </div>


                <div className="message">
                    <img src="./avatar.png" alt="avatar"/>
                    <div className="texts">
                        <p>Lakers, bron even got a triple double</p>
                        <span>5 min ago</span>
                    </div>
                </div>


                <div className="message own">
                    <div className="texts">
                        <img src="./lbj.png" alt="lebron"></img>
                        <p>LETS GO LAKERS!</p>
                        <span>4 min ago</span>
                    </div>
                </div>

                <div ref={endRef}></div>


            </div>

            

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

                    <div className="picker">

                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>

                    </div>

                </div>

                <button className="sendButton">Send</button>

            </div>
        </div>
    )
}  

export default Chat