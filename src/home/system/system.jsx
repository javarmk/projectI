import { createContext ,useState,useEffect} from "react";

export const windowSizeContext = createContext()


export default function System(props){
    
    const [windownSize, setWindownSize] = useState([0,0]);
    
    let resizeWindow=()=>{
        setWindownSize([window.innerWidth,window.innerHeight])
    }

    useEffect(() => {
        resizeWindow()
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);


    return(
        <windowSizeContext.Provider value={windownSize}>
            {props.children}
        </windowSizeContext.Provider>
    )

}