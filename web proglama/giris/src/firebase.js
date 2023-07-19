import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {

    apiKey: "AIzaSyBLF3A5wEPowh-0P4yURzWZrLimRarYgwM",
    authDomain: "react-auto-d161b.firebaseapp.com",
    databaseURL: "https://react-auto-d161b-default-rtdb.firebaseio.com",
    projectId: "react-auto-d161b",
    storageBucket: "react-auto-d161b.appspot.com",
    messagingSenderId: "526477484116",
    appId: "1:526477484116:web:eafe78692cfb04c041cdc1",
    measurementId: "G-WDY2ESE8PF"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const register =  async(email,password)  => {
try {
  const {user} =  await createUserWithEmailAndPassword(auth,email,password)
  return user
} catch (error){
    console.log(error.message)


}
} 

export const login  =async (email,password) => {

    try {
     const {user}=   await signInWithEmailAndPassword(auth,email,password)
return user

    }catch(error)
    {

        console.log(error)
    }
  }

  export const logout =async () => {

    try {
      await signOut(auth)
return true

    }catch(error)
    {

        console.log(error)
    }
  }