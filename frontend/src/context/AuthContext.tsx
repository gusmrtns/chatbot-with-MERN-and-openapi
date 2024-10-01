import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { authStatusChecker, loginUser } from "../helpers/api-communicator";

// Define a 'User' type to represent the authenticated user's structure
type User = {
    name: string;
    email: string;
};

// Define a 'UserAuth' type that outlines the authentication state and actions
type UserAuth = {
    isLoggedIn: boolean;  // Indicates whether the user is logged in or not
    user: User | null;    // Stores the logged-in user's information or null if not logged in
    login: (email: string, password: string) => Promise<void>; // Function for logging in
    signup: (name: string, email: string, password: string) => Promise<void>; // Function for signing up
    logout: () => Promise<void>; // Function for logging out
};

// Create the authentication context, initialized as null
const AuthContext = createContext<UserAuth | null>(null);

// 'AuthProvider' is a wrapper component that provides authentication state and actions to its children
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // State to store the logged-in user or null if not logged in
    const [user, setUser] = useState<User | null>(null);
    // State to indicate if the user is logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 'useEffect' to check if the user is already authenticated (e.g., based on cookies or tokens) when the component mounts
    useEffect(() => {
        // logic to check if the user's cookies or token are valid 
        // If valid, set the user as logged in and skip login.
        async function checkStatus() {
            const data = await authStatusChecker();
            if (data) {
                setUser({ email: data.email, name: data.name });
                setIsLoggedIn(true);
            }
        }

        checkStatus();

    }, []); // Empty dependency array means this runs only on the initial render

    // 'login' function to handle user login, accepts email and password
    const login = async (email: string, password: string) => {
        const data = await loginUser(email, password);
        if (data) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
        }
    };

    // 'signup' function to handle new user registration, accepts name, email, and password
    const signup = async (name: string, email: string, password: string) => {
        // TODO: Implement signup logic (e.g., sending a request to the backend)
        // Upon successful signup, update `user` and `isLoggedIn` states.
    };

    // 'logout' function to handle user logout
    const logout = async () => {
        // TODO: Implement logout logic (e.g., clearing tokens or session)
        // After logging out, reset `user` to null and `isLoggedIn` to false.
    };

    // 'value' is the object that holds the authentication state and the methods to manipulate it
    const value = {
        user,
        isLoggedIn,
        login,
        logout,
        signup,
    };

    // Provide the authentication state and actions to any child components
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

// 'userAuth' is a helper function to access the authentication context
export const useAuth = () => useContext(AuthContext);
