import "./detail.css"

const Detail = () => {
    return (
        <div className='detail'>

            <div className="user">

                <img src="./avatar.png" alt="avatar"></img>
                <h2>Rawn Kelly</h2>
                <p>CS Major @ FSU</p>

            </div>
            
            <div className="info">

                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="arrowUp"></img>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy</span>
                        <img src="./arrowUp.png" alt="arrowUp"></img>
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="arrowDown"></img>
                    </div>

                    <div className="photos">

                        <div className="photoItem">

                            <div className="photoDetail">

                            <img src="./lbj.png" alt="lebron"></img>
                            <span>LBJ</span>

                            </div>

                            <img src="./download.png" alt="download" className="icon"></img>
                        </div>

                         <div className="photoItem">

                            <div className="photoDetail">
                                
                            <img src="./lbj.png" alt="lebron"></img>
                            <span>LBJ</span>

                            </div>

                            <img src="./download.png" alt="download" className="icon"></img>
                        </div>

                        <div className="photoItem">

                            <div className="photoDetail">

                            <img src="./lbj.png" alt="lebron"></img>
                            <span>LBJ</span>

                            </div>

                            <img src="./download.png" alt="download" className="icon"></img>
                        </div>

                         <div className="photoItem">

                            <div className="photoDetail">
                                
                            <img src="./lbj.png" alt="lebron"></img>
                            <span>LBJ</span>

                            </div>

                            <img src="./download.png" alt="download" className="icon"></img>
                        </div>

                    </div>

                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="arrowUp"></img>
                    </div>
                </div>

                <button>Block</button>

            </div>

        </div>
    )
}  

export default Detail