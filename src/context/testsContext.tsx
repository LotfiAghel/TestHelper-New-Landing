import React, { createContext, useContext } from "react";
import { TestItem, tests } from "@/data/tests";

interface TestsContextType {
    tests: TestItem[];
}

const TestsContext = createContext<TestsContextType | undefined>(undefined);

export const TestsProvider = ({ children }: { children: React.ReactNode }) => {
    return <TestsContext.Provider value={{ tests: tests }}>{children}</TestsContext.Provider>;
};

export const useTests = () => {
    const context = useContext(TestsContext);
    if (!context) {
        throw new Error("useTests must be used inside a TestsProvider");
    }
    return context;
};
