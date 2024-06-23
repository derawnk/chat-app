import "./chat.css"

const Chat = () => {
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
            <div className="bottom"></div>
        </div>
    )
}  

export default Chat