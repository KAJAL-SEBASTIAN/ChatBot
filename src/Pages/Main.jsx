import React from 'react'
import './Main.css';

function Main() {
  return (
    <div>
<div className="body">
    <div className="row">
        <div className="col-md-2" id='side'>
          <div className="logo text-light">
           <h1>ChatBot</h1>
          </div>
          <button className="new btn bg-dark text-light">
            <i className='fa-solid fa-plus'></i>
       New Chat          </button>
         
         <div className="search">
            <input type="text" className='form-control' placeholder='Search' />
         </div>

       <div className="bottom text-light">
        <div><i className='fa-solid fa-home  text-light'></i> Home</div>
        <div><i className='fa-solid fa-save  text-light'></i> Saved</div>
       </div>
        </div>
        <div className="col-md-10">
<div className="chats">
<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eos impedit 
adipisci laboriosam iusto est. Voluptate laborum dolor aliquid obcaecati nostrum, odio omnis reprehenderit
 officia debitis. Temporibus dolor consequatur ea.</p>
</div>
<div className="chatFooter">
    <div className="inp">
        <input className='form-control' type="text" placeholder='Send a message' />
        <button className="send"><i className='fa-solid fa-arrow-alt-circle-up'></i> </button>
    </div>
</div>
        </div>
    </div>
</div>







        {/* <div className="sidebar">
          <div className="upperSide">
        <div className="upperSideTop">
            <img src="" alt="" /><span className="brand">ChatBot</span>
         <button className="midBtn"><i className='fa-solid fa-plus'></i>  New Chat</button>

        </div>
        <div className="upperSideBottom">

        </div>
          </div>
          <div className="lowerSide">

          </div>
        </div>
        <div className="main">

        </div> */}
    </div>
  )
}

export default Main