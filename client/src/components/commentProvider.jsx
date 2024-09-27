import { createContext, useState } from 'react';

// Create a context for the comments
const CommentContext = createContext();

export  const CommentProvider = ({ children }) => {
    const [comment, setComment] = useState("");

    return (
        <CommentContext.Provider value={{ comment, setComment }}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentContext;



