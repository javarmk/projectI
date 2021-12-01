import { useState, useEffect } from "react"
import { useContext } from "react"
import TextCenter from "../../tools/textcenter"
import Button from "../../elementevent/button"




import { deviceContext } from "../../../system/system"









export default function Theater(){
    //handle responsive
    const device = useContext(deviceContext)
    
    useEffect(()=>{
        switch(device){
            case 'mobile':
                console.log('mobile')
                var newStyle1={
                    width:'auto',
                    height:'70vw',
                    display:'grid',
                    gridTemplateColumns: '50vw auto',
                    marginBottom: '20px',
                    backgroundColor:'rgba(243, 243, 243, 0.8)',
                    borderRadius:'0 5px 5px 0',
                }
                
                setStyle1(newStyle1)



                var newStyle={...style}
                newStyle.padding='10px 10px 10px 10px'
                setStyle(newStyle)
                break;
            case 'tablet':
                console.log('tablet')
                var newStyle1={
                    width:'auto',
                    height:'70vw',
                    display:'grid',
                    gridTemplateColumns: '50vw auto',
                    marginBottom: '50px',
                    marginRight: '20px',
                    backgroundColor:'rgba(243, 243, 243, 0.8)',
                    borderRadius:'0 5px 5px 0',

                }
                
                setStyle1(newStyle1)



                var newStyle={...style}
                newStyle.padding='10px 10px 10px 10px'
                setStyle(newStyle)
                break;
            case 'laptop':
                console.log('laptop')
                var newStyle1={
                    width:'320px',
                    height:'220px',
                    display:'grid',
                    gridTemplateColumns: '160px auto',
                    marginBottom: '50px',
                    backgroundColor:'rgba(243, 243, 243, 0.8)',
                    borderRadius:'0 5px 5px 0',
                }
                setStyle1(newStyle1)

                var newStyle={...style}
                newStyle.padding='10px 10px 10px 100px'
                setStyle(newStyle)
            default:
                console.log('laptop')
                var newStyle1={
                    width:'320px',
                    height:'250px',
                    display:'grid',
                    marginRight:'20px',
                    gridTemplateColumns: '160px auto',
                    marginBottom: '50px',
                    backgroundColor:'rgba(243, 243, 243, 0.8)',
                    borderRadius:'0 5px 5px 0',

                }
                
                setStyle1(newStyle1)
                var newStyle={...style}
                newStyle.padding='10px 10px 10px 100px'
                setStyle(newStyle)
                break;
        }
    },[device])

    const [style,setStyle]=useState(
        {
            width:'100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            padding: '10px 10px 10px 10px',
        }
    )
    //responsive
    const [style1,setStyle1]=useState(
        {
           
        }
    )
    const [style2,setStyle2]=useState(
        {   
            // objectFit: 'scale-down',
            width:'100%',
            height:'100%',
            borderRadius:'5px' ,
        }
    )
    return(
        <div style={{...style}}>
            <div style={style1}>
                <img 
                    src="https://occ-0-325-64.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTYFX7VqpyRl5w5dxDJ_PVDII-b0GTeheSE8l1qlJrt6UUnWOFY7tbHOujLuHAjkXjq1zuxFNkXdp7UxFwVrORkOUYNSVqEfL6s1fil4ojIIEdBfEyOC-B8TIdvjrA.jpg?r=15e" 
                    alt=""
                    style={style2}
                />
                <div>
                    <TextCenter style={{height:'50px'}}>
                        Bản án từ địa ngục
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rating: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px',backgroundColor:'rgba(121, 175, 251, 0.8)',transition: '0.05s'}}>
                            Vào rạp
                        </Button>
                    </TextCenter>
                </div>

            </div>
            <div style={style1}>
                <img 
                    src="https://occ-0-325-64.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRB9Da1IO9riMlMnRV1R1j9QZeWJd27KtEQbWm427j3Bj3iXhb475PkFBvtVdoKSr_ZE6G2lzdb08FVTovrmRNrFuhaMbzbp9EirSFvupBJ24pVbW7o9rGkGHWZdUA.jpg?r=b83" 
                    alt="" 
                    style={style2}
                />
                <div>
                    <TextCenter style={{height:'50px'}}>
                        Arcane
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rating: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px',backgroundColor:'rgba(121, 175, 251, 0.8)'}}>
                            Vào rạp
                        </Button>
                    </TextCenter>
                </div>            

            </div>
            <div style={style1}>
                <img 
                    src="https://occ-0-325-64.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeauw4WHz3V8zLeYGf23qeO6H-1NOMJ5rBoajH2_eLod7wZwhml2ls1-LsgUas7YYLS6gHhfjdzlVp0P4uRd8FhSfY6U.jpg?r=b23" 
                    alt="" 
                    style={style2}
                />
                <div>
                    <TextCenter style={{height:'50px'}}>
                        Reply1988
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rating: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px',backgroundColor:'rgba(121, 175, 251, 0.8)'}}>
                            Vào rạp
                        </Button>
                    </TextCenter>
                </div>
            </div>
            <div style={style1}>
                <img 
                    src="https://occ-0-325-64.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABajTKmu_tf4EDEus8WMg5Wz5UQWKsny3t8aVdK8zjY1Fd8X7CvguZaLaCwRyUobo3QIei4w9uasATI0Cn3QEcGA4GZZeG0RZv5I8cXpD3kPFmiLWCjzvW-x51u0bEpue1cg-ts2jCY7vMdC_c5VCM0ZGcDYZQonU0ymUw5_Rkg.jpg?r=539" 
                    alt="" 
                    style={style2}
                />
                 <div>
                    <TextCenter style={{height:'50px'}}>
                        Luyen mo
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rating: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px',backgroundColor:'rgba(121, 175, 251, 0.8)'}}>
                            Vào rạp
                        </Button>
                    </TextCenter>
                </div>
            </div>
        </div>
    )
}