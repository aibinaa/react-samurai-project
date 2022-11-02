import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    const PostData = [
        {id:1 , post: 'Hey, its my 1 post', likesCount: 12},
        {id:2 , post: 'Hey, its my 2 post', likesCount: 10},
        {id:3 , post: 'Hey, its my 3 post', likesCount: 20},
        {id:4 , post: 'Hey, its my 4 post', likesCount: 11},
        {id:5 , post: 'Hey, its my 5 post', likesCount: 15}
    ]
    return (
        <div>
            My posts
            <div className={classes.newpost}>
                <textarea></textarea>
                <button>Add new post</button>
            </div>
            <div>New post</div>
            <div className={classes.posts}>
                {PostData.map(p => <Post message={p.post} likesCount={p.likesCount}/>)}
                {/* <Post message={PostData[0].post} likesCount={`${PostData[0].likesCount } likes`}/> */}


            </div>
        </div>

    )
}

export default MyPosts