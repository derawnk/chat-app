import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";

const ChatList = () => {
    const [addMode,setAddMode]= useState(false)
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="search"></img>
                    <input type="text" placeholder="Search"/>
                </div>

                <img src={addMode ? "./minus.png" : "./plus.png"} 
                alt="plus" 
                className="add"
                onClick={() => setAddMode((prev) => !prev)}
                />
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Deandre</span>
                    <p>Hey</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Sabrina</span>
                    <p>Hey</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Alex</span>
                    <p>Hey</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Robert</span>
                    <p>Hey</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Jasmine</span>
                    <p>Hey</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Zay</span>
                    <p>Hey</p>
                </div>
            </div>

            <div className="item">
                <img src="./avatar.png" alt="avatar" />
                <div className="texts">
                    <span>Reggie</span>
                    <p>Hey</p>
                </div>
            </div>
            {addMode && <AddUser/>}

        </div>
    );
};

export default ChatList