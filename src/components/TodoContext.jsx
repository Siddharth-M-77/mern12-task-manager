import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [tasks, settasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    return (
        <TodoContext.Provider value={[tasks, settasks]}>
            {children}
        </TodoContext.Provider>
    );
};
