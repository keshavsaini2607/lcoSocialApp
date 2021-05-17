import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import database from '@react-native-firebase/database'


export const signup = (data) => async (dispatch) => {
    const {name, instaUserName, bio, email, password, counrty, image} = data

    auth().createUserWithEmailAndPassword(email, password)
    .then((data) => {
        database().ref(`/users/${data.user.uid}`)
        .set({
            name, 
            instaUserName,
            counrty,
            image,
            bio,
            uid: data.user.uid
        })
        .then(() => console.log("Data set success"))
        Snackbar.show({
            text: "Signup Success!",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch((err) => {
        Snackbar.show({
            text: "Signup failed!",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}

export const signin = (data) => async (dispatch) => {
    const {email, password} = data

    auth().signInWithEmailAndPassword(email, password)
    .then((data) => {
        Snackbar.show({
            text: "Signup Success!",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch((err) => {
        Snackbar.show({
            text: "Signin failed!",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}

export const signout = () => async (dispatch) => {
    auth().signOut()
    .then(() => {
        Snackbar.show({
            text: "Signout successfull!",
            textColor: "white",
            backgroundColor: "#1b262c"
        })
    })
    .catch((err) => {
        Snackbar.show({
            text: "Signout failed!",
            textColor: "white",
            backgroundColor: "red"
        })
    })
}