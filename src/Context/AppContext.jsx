import { createContext } from "react";
import { doctors } from '../assets/assets'

export const APPContext = createContext()

const APPContextProvider = (props) => {



const value = {
   doctors
}

   return (
      <APPContext.Provider value={value}>
         {props.children}
      </APPContext.Provider>

   ) 
}
export default APPContextProvider  