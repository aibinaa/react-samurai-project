import React from 'react'
import classes from './Post.module.css'
const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.avatar} alt="post" src="https://png.pngtree.com/png-vector/20210129/ourlarge/pngtree-cute-cat-avatar-png-image_2852037.jpg" />
            <div>{props.message}</div>
            <span>{props.likesCount}</span>
        </div>
    )
}

export default Post