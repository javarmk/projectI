



// use this to contain propertise have .theme{'dark','light'} and .style
export default function HeaderFixed(properties){
    
    var props={...properties}
    if(typeof props.style ==='undefined'){
        props.style={
            // border
        }
    }
    if(typeof props.style.height==='undefined'){
        props.style.height='56px'
    }
    if(typeof props.theme==='undefined'){
        props.theme='light'
    }
    if(typeof props.style.display==='undefined'){
        props.style.display='inherit';
    }
    if(typeof props.style.justifyContent==='undefined'){
        props.style.justifyContent='inherit'
    }    
    if(typeof props.style.width==='undefined'){
        props.style.width='100%'
    }
    if(typeof props.style.boxShadow==='undefined'){
        props.style.boxShadow='0px 0px 5px 0px  '+(props.theme=='light'?'rgba(167, 167, 167, 0.4)':'rgba(167, 167, 167, 0.4)')
    }
    if(typeof props.style.backgroundColor ==='undefined'){
        props.style.backgroundColor=props.theme=='light'?'#fff':'#001529'
    }
    if(typeof props.style.color==='undefined'){
        props.style.color=props.theme=='light'?'#001529':'#fff'
    }
    return(
        <div style={props.style}>
            {props.children}
        </div>
    )
}