
import React from 'react'
import "./styles.css"
const TransformText = ({me}) => {
    // console.log(me)
      const date_user=me.split(/\r?-/);
     console.log(date_user)
      const date=date_user[0];
      const user_msg=date_user[1].split(/\r?:/);
      const user=user_msg[0]
      const msg=user_msg[1]
  return (
    <div>
    <div className="message_block">user:{user}<br/> message:{msg} 
    </div>
    <br/>   
    </div>
  )
}

export default TransformText