import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
    const { auth } = useContext(AuthContext)
    useDebugValue(auth, auth => auth?.user ? "User Logged in" : "User logged Out");
    return useContext(AuthContext);  // returns the AuthContext value (AuthProvider)
}

export default useAuth;