import { useContext } from "react";
import StoreContext from "../context/store";



export default function useStore(...names) {

    let store = useContext(StoreContext)

    return names.map(name => store[name])

}