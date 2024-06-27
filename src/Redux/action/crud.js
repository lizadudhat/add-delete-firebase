import { Firestore, addDoc, collection, deleteDoc, getDocs, doc, getFirestore } from "firebase/firestore";
import app from "../../firebaseconfig";

const db = getFirestore(app);

export const ViewUsers = () => {
  return async (dispatch) => {
    try {
      const data = collection(db, 'Firebase-Firestore');
      const userList = await getDocs(data);
      const record = userList.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      dispatch({
        type: 'viewuser',
        payload: record
      });
    } catch (err) {
      dispatch({
        type: 'viewusererror',
        payload: err,
      });
    }
  }
};

export const Adduser = (user) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "Firebase-Firestore"), {
        name: user.name,
        phone: user.phone
      });
      dispatch({
        type: 'addrecord'
      });
      dispatch(ViewUsers()); // Refresh the user list after adding a new user
    } catch (err) {
      dispatch({
        type: 'adderror',
        payload: err,
      });
    }
  }
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const deleteData = doc(db, "Firebase-Firestore", id);
      await deleteDoc(deleteData);
      dispatch({
        type: 'deleteUser',
        payload: id
      });
      dispatch(ViewUsers()); // Refresh the user list after deleting a user
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
