import "./userInfo.css"

const Userinfo = () => {
    return (
        <div className='userInfo'>

            <div className="user">
            <img src="/avatar.png" alt="avatar"/>
            <h2>User Name</h2>
            </div>

            <div className="icons">

            <img src="./more.png" alt="more"/>
            <img src="./video.png" alt="video"/>
            <img src="./edit.png" alt="edit"/>

            </div>
        </div>
    )
}  

export default Userinfo