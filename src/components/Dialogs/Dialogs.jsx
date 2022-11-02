import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
    let DialogsData = [
        { id: 1, name: "Dima" },
        { id: 2, name: "Leha" },
        { id: 3, name: "Alena" },
        { id: 4, name: "Lena" },
        { id: 5, name: "Kira" }
    ]

    let MessagesData = [
        { id: 1, message: 'Hi', likesCount: 9 },
        { id: 2, message: 'Hey Hey', likesCount: 8 },
        { id: 3, message: 'How are u', likesCount: 3 },
        { id: 4, message: 'Ok', likesCount: 1 },
        { id: 5, message: 'U?', likesCount: 5 },
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {DialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
                {/* <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} /> */}
                {/* <DialogItem name="Dima" id='1' /> */}
            </div>
            <div className={classes.messages}>
                {MessagesData.map(m => <Message message={m.message}/>)}
                {/* <Message message={MessagesData[1].message} />*/}
            </div>
        </div>
    )
}

export default Dialogs