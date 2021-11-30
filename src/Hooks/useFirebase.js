import { useEffect, useState } from "react";
import getAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

getAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
    // .then((result) => {
    //   setUser(result.user);
    // });
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({})
          .catch((error) => {
            console.log(error.message);
          })
          .finally(() => setLoading(false));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubcribed;
  }, []);
  return { signWithGoogle, user, logOut, setLoading, isLoading };
};
export default useFirebase;
