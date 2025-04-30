import { createContext, useContext, useState } from "react";
import { Map } from "immutable";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [userData, setUserData] = useState(Map());
    const [currentUser, setCurrentUser] = useState();
    const [toggleState, setToggleState] = useState(Array(12).fill(false));
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    return (
        <StoreContext.Provider value={{ userData, setUserData, currentUser, setCurrentUser, toggleState, setToggleState, selectedGenres, setSelectedGenres, pageNum, setPageNum }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}