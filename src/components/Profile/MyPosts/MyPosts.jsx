import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {

    return (
        <div>
            My posts
            <div className={classes.newpost}>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <div>New post</div>
            <div className={classes.posts}>
                {props.posts.map(p => <Post key={p.id} message={p.post} likesCount={p.likesCount}/>)}
            </div>
        </div>

    )
}

export default MyPosts