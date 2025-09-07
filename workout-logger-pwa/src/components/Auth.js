import { useEffect, useState } from "react";
import { auth, provider, db } from "../api/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Auth = ({ onUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      onUser && onUser(u);

      // Store user info in Firestore
      if (u) {
        await setDoc(
          doc(db, "users", u.uid),
          {
            uid: u.uid,
            displayName: u.displayName,
            email: u.email,
            photoURL: u.photoURL,
            lastLogin: new Date(),
          },
          { merge: true }
        );
      }
    });
    return () => unsub();
  }, [onUser]);

  const handleSignIn = () => signInWithPopup(auth, provider);
  const handleSignOut = () => signOut(auth);

  return (
    <div className="auth-box">
      {user ? (
        <div>
          <span>Hola, {user.displayName}</span>
          <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Iniciar sesión con Google</button>
      )}
    </div>
  );
};

export default Auth;