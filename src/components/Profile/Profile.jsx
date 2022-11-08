import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
// import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo />
            <MyPosts
                posts={props.ProfilePage.PostsData}
                NewPostText={props.ProfilePage.NewPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost} />
        </div>
    )
}

export default Profile