import { createContext } from "react";

type AppContextType = {
    slider: React.RefObject<HTMLUListElement | null>
}

export const AppContext = createContext({} as AppContextType)