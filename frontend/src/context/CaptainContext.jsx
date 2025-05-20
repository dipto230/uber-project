import { createContext, useState, useContext } from "react";

// ✅ Exporting the context so it can be imported elsewhere
export const CaptainDataContext = createContext();

// Create the provider component
const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

// Optional: Custom hook for easier usage
export const useCaptain = () => useContext(CaptainDataContext);

// ✅ Exporting the provider as default
export default CaptainProvider;
