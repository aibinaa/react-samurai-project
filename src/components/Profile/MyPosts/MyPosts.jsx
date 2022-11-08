import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {

    let newPostElement = React.createRef();;

    let addPost = () => {
        props.addPost( )
     }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    } 
    return (
        <div>
            My posts
            <div className={classes.newpost}>
                <textarea onChange={onPostChange} value={props.NewPostText} ref={newPostElement} />
                <button onClick={addPost}>Add new post</button>
            </div>
            <div>New post</div>
            <div className={classes.posts}>
                {props.posts.map(p => <Post key={p.id} message={p.post} likesCount={`${p.likesCount} likes`} />)}
            </div>
        </div>
    )
}

export default MyPosts