import React,{ useState,useEffect} from "react";

export default function Menu(properties){
    var props={...properties}

    if(typeof props.style ==='undefined'){
        props.style={}
    }
    if(typeof props.style.display==='undefined'){
        props.style.display='inherit';
    }
    if(typeof props.style.justifyContent==='undefined'){
        props.style.justifyContent='left'
    }


    // ----------------
    const [childSelecting,setChildSelecting]=useState('1')
    
    return(
        <div style={props.style}>
            {
                React.Children.map(props.children,child=>{
                    return React.cloneElement(child,{
                        childSelecting: childSelecting,
                        setChildSelecting:setChildSelecting,
                    })
                })
            }
        </div>
    )
}

export function SubMenu(properties){
    const [style,setStyle]=useState({})
    useEffect(()=>{
        var newStyle={}
        if(! (typeof properties.style==='undefined')){
            // if != undefined then set newstyle
            newStyle={...properties.style}
        }

        // set default
        if(typeof newStyle.cursor=='undefined'){
            newStyle.cursor='pointer'
        }
        if(typeof newStyle.display ==='undefined'){
            newStyle.display= 'inherit'
        }
        if(typeof newStyle.justifyContent ==='undefined'){
            newStyle.justifyContent= 'center'
        }
        if(typeof newStyle.alignItems ==='undefined'){
            newStyle.alignItems= 'center'
        }
        if(typeof newStyle.paddingLeft ==='undefined'){
            newStyle.paddingLeft='20px'
        }
        if(typeof newStyle.paddingRight ==='undefined'){
            newStyle.paddingRight= '20px'
        }
        if(typeof newStyle.transition ==='undefined'){
            newStyle.transition='all 0.5s'
        }
        if(typeof newStyle.backgroundColor==='undefined'){
            newStyle.backgroundColor='inherit'
        }
        setStyle(newStyle)
    },[])
    
    const [hoverStyle,setHoverStyle]=useState({}) // default
    const [onHoverStyle,setOnHoverStyle]=useState({}) // event
    useEffect(()=>{
        var newOnHoverStyle={}
        if(!(typeof properties.onHoverStyle==='undefined')){
            newOnHoverStyle={...properties.onHoverStyle}
        }
        if(typeof newOnHoverStyle.backgroundColor==='undefined'){
            newOnHoverStyle.backgroundColor='#1890ff'
        }
        setOnHoverStyle(newOnHoverStyle)
    },[])
    
    
    const [clickedStyle,setClickedStyle]=useState({}) // default
    const [onClickedStyle,setOnClickedStyle]=useState({}) // event
    useEffect(()=>{
        var newOnClickedStyle={}
        if(!(typeof properties.onClickedStyle=='undefined')){
            newOnClickedStyle=properties.onClickedStyle
        }
        
        if(typeof newOnClickedStyle.backgroundColor==='undefined'){
            newOnClickedStyle.backgroundColor='#1890ff'
        }
        setOnClickedStyle(newOnClickedStyle)
    },[])

    const handleOnChangleChildSelecting=()=>{
        if(properties.keyValue==properties.childSelecting){
            setClickedStyle(onClickedStyle)
        }else{
            setClickedStyle({})
        }
    }
    useEffect(()=>{
        handleOnChangleChildSelecting();

    },[properties.childSelecting])

    //-------------------------- hover handle --------------------
    const handleOnMouseEnter=()=>{
        //set style on Hover
        setHoverStyle(onHoverStyle)
    }   
    const handleOnMouseLeave=()=>{
        // set style on hover
        setHoverStyle({})
    }
    
    const handleOnClick=()=>{
        // do funtion pass from parent
        if(!(typeof properties.onClickedFunction==='undefined')){
            properties.onClickedFunction();
        }
        // setChildren that parent is selecting
        properties.setChildSelecting(properties.keyValue)
        handleShowChild()
    }
    

    const [childSelecting,setChildSelecting]=useState('1')
    const [showChild,setShowChild]=useState('none');
    const handleShowChild=()=>{
        if(showChild=='none'){
            setShowChild('inherit')
        }else{
            setShowChild('none')
        }
    }
    return(
        <div>
            <div
                style={{... style,...hoverStyle,...clickedStyle}}
                onClick={()=>handleOnClick()}
                onMouseEnter={()=>handleOnMouseEnter()}
                onMouseLeave={()=>handleOnMouseLeave()}
            >
                <div>
                    {properties.title}
                </div>
            </div>
            <div style={{display:showChild}}>
                {
                    React.Children.map(properties.children,child=>{
                        return React.cloneElement(child,{
                            childSelecting: childSelecting,
                            setChildSelecting:setChildSelecting,
                        })
                    })
                }
            </div>  
        </div>
    )
}


export function MenuItem(properties){
    const [style,setStyle]=useState({})
    
    useEffect(()=>{
        var newStyle={}
        if(! (typeof properties.style==='undefined')){
            // if != undefined then set newstyle
            newStyle={...properties.style}
        }
        
        // set default
        if(typeof newStyle.cursor=='undefined'){
            newStyle.cursor='pointer'
        }
        if(typeof newStyle.display ==='undefined'){
            newStyle.display= 'inherit'
        }
        if(typeof newStyle.justifyContent ==='undefined'){
            newStyle.justifyContent= 'center'
        }
        if(typeof newStyle.alignItems ==='undefined'){
            newStyle.alignItems= 'center'
        }
        
        if(typeof newStyle.padding==='undefined'){
            newStyle.padding='0 20px 0 20px'
        }
        
        if(typeof newStyle.transition ==='undefined'){
            newStyle.transition='background-color 0.5s'
        }
        if(typeof newStyle.backgroundColor==='undefined'){
            newStyle.backgroundColor='inherit'
        }
        setStyle(newStyle)
    },[])
    
    const [hoverStyle,setHoverStyle]=useState({}) // default
    const [onHoverStyle,setOnHoverStyle]=useState({}) // event
    useEffect(()=>{
        var newOnHoverStyle={}
        if(!(typeof properties.onHoverStyle==='undefined')){
            newOnHoverStyle={...properties.onHoverStyle}
        }
        if(typeof newOnHoverStyle.backgroundColor==='undefined'){
            newOnHoverStyle.backgroundColor='rgba(32, 147, 255, 0.9)'
        }
        
        setOnHoverStyle(newOnHoverStyle)
    },[])
    
    
    const [clickedStyle,setClickedStyle]=useState({}) // default
    const [onClickedStyle,setOnClickedStyle]=useState({}) // event
    useEffect(()=>{
        var newOnClickedStyle={}
        if(!(typeof properties.onClickedStyle=='undefined')){
            newOnClickedStyle=properties.onClickedStyle
        }
        
        if(typeof newOnClickedStyle.backgroundColor==='undefined'){
            newOnClickedStyle.backgroundColor='#1890ff'
        }
        setOnClickedStyle(newOnClickedStyle)
    },[])

    const handleOnChangleChildSelecting=()=>{
        if(properties.keyValue==properties.childSelecting){
            setClickedStyle(onClickedStyle)
        }else{
            setClickedStyle({})
        }
    }
    useEffect(()=>{
        handleOnChangleChildSelecting();

    },[properties.childSelecting])

    //-------------------------- hover handle --------------------
    const handleOnMouseEnter=()=>{
        //set style on Hover
        setHoverStyle(onHoverStyle)
    }   
    const handleOnMouseLeave=()=>{
        // set style on hover
        setHoverStyle({})
    }
    
    const handleOnClick=()=>{
        // do funtion pass from parent
        if(!(typeof properties.onClickedFunction==='undefined')){
            properties.onClickedFunction(properties.keyValue);
        }
        // setChildren that parent is selecting
        if(!(typeof properties.setChildSelecting==='undefined')){
            properties.setChildSelecting(properties.keyValue)
        }
    }
    
    return(
        <div
            style={{... style,...hoverStyle,...clickedStyle}}
            onClick={()=>handleOnClick()}
            onMouseEnter={()=>handleOnMouseEnter()}
            onMouseLeave={()=>handleOnMouseLeave()}
        >
            {properties.children}
        </div>
    )
}
