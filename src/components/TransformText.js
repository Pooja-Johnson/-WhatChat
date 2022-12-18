
import React from 'react'
import "./styles.css"
const TransformText = ({a_user,me}) => {
   const date_time=me.slice(0,13)
   const date=date_time.slice(0,6)
   const time=date_time.slice(8)
   const user_message=me.slice(16)

     //const date_user=me.split(/\r?-/);
      //const date_user=me.split("-",2);
     
     // console.log(time)
      //console.log(date_user[2])
     const user_msg=user_message.split(/\r?:/);
      const user=user_msg[0]
      //console.log(".."+user+"..") 
      const msg=user_msg[1]

     
    //   if(user.localeCompare(a_user)===0)
    //   {
    // //console.log(".."+a_user+"..")
    // <br></br>
    
    return (
    <div>
    <div className={user.localeCompare(a_user)===0 ? "message_blockright" : "message_block"}>
      <span className='username'>{user}</span>
      <br/>
       {msg}
       <br/>
       <span className='date'>{date},{time}</span>
      
    </div>
    <br/> 
    <br/> 
    <br/> 
    </div>
    
    )
}

export default TransformText