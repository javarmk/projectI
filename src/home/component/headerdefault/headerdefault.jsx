import axios from "axios"



export default function HeaderDefault(){
    const fcallapi= ()=>{
        axios({
            method:'get',
            url:'http://127.0.0.1:8000/home/shelter/',
        }).then (res=>{
            // if(res.status===200){
            //     console.log(res.data)
            // }
            // console.log(res)
            console.log(res.status)

        })
    }
    return(
        <div>
            Hello world
            <button onClick={()=>fcallapi()} >Click me!</button>
        </div>
    )
}