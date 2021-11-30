export default function TextCenter(properties){
    
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',...properties.style}}>
            {properties.children}
        </div>
    )
}