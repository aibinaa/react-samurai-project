import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {props.state.DialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={classes.messages}>
                {props.state.MessagesData.map(m => <Message key={m.id} message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs