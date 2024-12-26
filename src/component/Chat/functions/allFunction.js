import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export const loginUser = async ({ mobile, goToNext }) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("mobile", "==", mobile));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log("hello firestore", querySnapshot.docs[0].id);
      goToNext({ mobile: mobile, userid: querySnapshot.docs[0].id });
    } else {
      // createUser({ name: "John Doe", mobile: mobile });
      const userid = uuidv4();
      const userRef = doc(collection(db, "users"), userid);
      // await setDoc(userRef, {
      //   mobile: mobile,
      //   userid: userid,
      // });
      // goToNext({ mobile: mobile, userid: querySnapshot.docs[0].id });
      console.log(userid, "No user found with this mobile number", userRef);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};
export const getUserData = async ({ setUserData }) => {
  try {
    // Retrieve the userid from local storage
    const userid = localStorage.getItem("userid");

    if (!userid) {
      console.error("No userid found in local storage.");
      return;
    }

    // Reference the 'users' collection and create a query to find the user by userid
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userid", "==", userid));

    // Fetch the data from Firestore
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // console.log(querySnapshot.docs[0].data());
      setUserData(querySnapshot.docs[0].data());
    } else {
      console.error("No user data found.");
    }
  } catch (error) {
    console.error("Error getting user data:", error);
  }
};
export const getFriendsData = async ({ friendsId, setFriendsData }) => {
  try {
    // Reference the 'users' collection and create a query to find the user by userid
    // console.log(friendsId, "pamsmdmlmlmlm");
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userid", "==", friendsId));

    // Fetch the data from Firestore
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // console.log(querySnapshot.docs[0].data());
      setFriendsData(querySnapshot.docs[0].data());
    } else {
      console.error("No user data found.");
    }
  } catch (error) {
    console.error("Error getting user data:", error);
  }
};
export const getAllUserData = async ({ setAllUserData }) => {
  try {
    // Retrieve the userid from local storage
    const userid = localStorage.getItem("userid");

    if (!userid) {
      console.error("No userid found in local storage.");
      return;
    }

    // Reference the 'users' collection and create a query to find the user by userid
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userid", "!=", userid));

    // Fetch the data from Firestore
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot, "===========--------------");

    if (!querySnapshot.empty) {
      // console.log(querySnapshot.docs[0].data());
      setAllUserData(querySnapshot.docs);
    } else {
      console.error("No user data found.");
    }
  } catch (error) {
    console.error("Error getting user data:", error);
  }
};
export const handleSearch = async ({ username, setUser }) => {
  const q = query(collection(db, "users"), where("name", "==", username));
  try {
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    if (!querySnapshot.empty) {
      setUser(querySnapshot?.docs);
    }
  } catch (err) {
    console.log(err);
  }
};
export const getMessages = async ({ chatId, setMessages }) => {
  const q = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("createdAt", "desc")
  );
  try {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allMessages = querySnapshot.docs.map((item) => ({
        ...item.data(), // Use item.data() to access the document data
        createdAt: item.data().createdAt,
      }));
      // console.log(allMessages);
      setMessages(allMessages.reverse()); // Update the state with the fetched messages
    });
    return unsubscribe;
  } catch (error) {
    console.log(error);
  }
};
export const sendMessage = async ({ chatId, mymsg }) => {
  try {
    const messagesRef = collection(db, "chats", chatId, "messages");
    const data = await addDoc(messagesRef, mymsg);
    console.log(data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
