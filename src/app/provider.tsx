"use client";
import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "@/context/authContext";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState, useContext } from "react";

type AuthContextType = {
  user: User | null;
}

// Handle context 
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  console.log("AuthProvider rendered");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubcribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <div>
        {children}
      </div>
    </AuthContext.Provider>
  );
}
