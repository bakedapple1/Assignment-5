import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userData, setUserData] = useState(Map());
    const [currentUser, setCurrentUser] = useState();

    return (
        <StoreContext.Provider value={{ userData, setUserData, currentUser, setCurrentUser }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}