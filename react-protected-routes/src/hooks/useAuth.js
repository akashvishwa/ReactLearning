import { AuthContext } from "../contexts/Contexts";
import { useContext } from "react";

export const useAuth=()=>{
    return {auth:useContext(AuthContext)};
}
