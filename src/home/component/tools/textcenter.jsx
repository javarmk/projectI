export default function TextCenter(properties){
    
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',...properties.style}}>
            {properties.children}
        </div>
    )
}