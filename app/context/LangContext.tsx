'use client';
import React, { createContext, useContext, useEffect, useReducer } from "react";

interface LangContextProps {
    lang: string;
    project: number
}

interface LangProviderProps extends LangContextProps {
    dispatch: React.Dispatch<Action>;
}

const initicalState: LangContextProps = {
    lang: 'pt-br',
    project: 0
}

export const LangContext = createContext<LangProviderProps | undefined>(undefined);

export const useLangContext = () => {
    const context = useContext(LangContext);
    if (!context) {
        throw new Error('useLangContext must be used within a LangProvider');
    }
    return context;
}

type Action = 
    | { type: 'setLang'; payload: string }
    | { type: 'setProject'; payload: number }

function reducer(state: LangContextProps, action: Action): LangContextProps {
    switch (action.type) {
        case 'setLang':
            return { ...state, lang: action.payload };
        case 'setProject':
            return { ...state, project: action.payload };
        default:
            return state;
    }
}


export const LangProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initicalState);
    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            dispatch({ type: "setLang", payload: lang });
        }
    }, [state.lang])

    return <LangContext.Provider value={{ ...state, dispatch }}>
        {children}
        </LangContext.Provider>
}

