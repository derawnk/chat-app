import "./chatList.css"

const ChatList = () => {
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="search"></img>
                    <input type="text" placeholder="Search"/>
                </div>
                <img src="./plus.png" alt="plus"/>
            </div>
        </div>
    )
}  

export default ChatList