import { QuestionTrueFalseOptionResponse } from "@/Models/Models/Models/Customer/Response";
import { Question, QuestionTrueFalseOption } from "@/Models/Models/Models/Exams/Question";
import { User } from "@/types";
import { VerifyCookie } from "@/utils/login";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

const userContext = createContext<{
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
    englishResult: Map<number, QuestionTrueFalseOptionResponse>,
    setEnglishResult: Dispatch<SetStateAction<Map<number, QuestionTrueFalseOptionResponse>>>,
    levelQuestions: Question[],
    setLevelQuestions: Dispatch<SetStateAction<Question[]>>,
    examUser: {
        date: string,
        score: string,
        level: string,
        fullName: string,
        email: string,
        phone: string,
    },
    setExamUser: Dispatch<{
        date: string,
        score: string,
        level: string,
        fullName: string,
        email: string,
        phone: string,
    }>,
}>({
    user: null,
    setUser: () => { },
    englishResult: {},
    setEnglishResult: () => { },
    levelQuestions: [],
    setLevelQuestions: () => { },
    examUser: null,
    setExamUser: () => { },
});

export const getUserContext = () => useContext(userContext);

const UserContextProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [englishResult, setEnglishResult] = useState(new Map());
    const [levelQuestions, setLevelQuestions] = useState<Question[]>([]);
    const [examUser, setExamUser] = useState(null);

    useEffect(() => {

        try {
            VerifyCookie(setUser);
        } catch (e) {
            // console.error(e)
        }
    }, []);
    return <userContext.Provider value={{
        user,
        setUser,
        englishResult,
        setEnglishResult,
        levelQuestions,
        setLevelQuestions,
        examUser,
        setExamUser,
    }}>
        {children}
    </userContext.Provider>
}
export default UserContextProvider;