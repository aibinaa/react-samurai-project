let rerenderEntireTree = () => {

}
let state = {
    ProfilePage: {
        PostsData: [
            { id: 1, post: 'Hey, its my 1 post', likesCount: 12 },
            { id: 2, post: 'Hey, its my 2 post', likesCount: 10 },
            { id: 3, post: 'Hey, its my 3 post', likesCount: 20 },
            { id: 4, post: 'Hey, its my 4 post', likesCount: 11 },
            { id: 5, post: 'Hey, its my 5 post', likesCount: 15 }
        ],
        NewPostText: 'samurai'
    },
    DialogsPage: {
        DialogsData: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Leha" },
            { id: 3, name: "Alena" },
            { id: 4, name: "Lena" },
            { id: 5, name: "Kira" }
        ],
        MessagesData: [
            { id: 1, message: 'Hi', likesCount: 9 },
            { id: 2, message: 'Hey Hey', likesCount: 8 },
            { id: 3, message: 'How are u', likesCount: 3 },
            { id: 4, message: 'Ok', likesCount: 1 },
            { id: 5, message: 'U?', likesCount: 5 },
        ]
    }
}
window.state = state

export const addPost = () => {
    let newPost = {
        id: 6,
        post : state.ProfilePage.NewPostText,
        likesCount: 0
    };
    state.ProfilePage.PostsData.push(newPost)
    state.ProfilePage.NewPostText = '' 
    rerenderEntireTree(state)
} 

export const updateNewPostText = (newText) => {
    state.ProfilePage.NewPostText = newText 
    rerenderEntireTree(state)
}

export const subsribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state; 
