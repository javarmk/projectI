import { createContext ,useState,useEffect} from "react";

export const windowSizeContext = createContext()
export const deviceContext=createContext()



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

    const [device,setDevice]=useState('')

    let calDevice=(width)=>{
        if(width<=480){
            return 'mobile'
        }
        if(width>480&&width<=768){
            return 'tablet'
        }
        if(width>768&&width<=1024){
            return 'laptop'
        }
        if(width>1024&&width<1200){
            return 'desktop'
        }
        return 'tv'
    }
    useEffect(()=>{
        setDevice(calDevice(windownSize[0]))
    },[windownSize])

    return(
        <windowSizeContext.Provider value={windownSize}>
            <deviceContext.Provider value={device}>
                {props.children}
            </deviceContext.Provider>
        </windowSizeContext.Provider>
    )

}