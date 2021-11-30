import { useState, useEffect } from "react"

import { useContext } from "react"

import { windowSizeContext } from "../../../system/system"
import TextCenter from "../../tools/textcenter"
import Button from "../../elementevent/button"
export default function Theater(){

    const windowSize=useContext(windowSizeContext)

    
    useEffect(()=>{
        
    },windowSize)
    

    const [style,setStyle]=useState(
        {
            width:'100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left',
            padding: '10px 10px 10px 10px',
            // backgroundColor: 'rgba(239, 239, 239, 1)'

        }
    )
    //responsive
    const [style1,setStyle1]=useState(
        {
            width:'400px',
            height: '266px',
            borderRadius:'10px 10px 10px 10px',
            marginLeft: '20px',
            display:'grid',
            gridTemplateColumns: '200px auto',
            marginBottom: "50px"
             
        }
    )
    const [style2,setStyle2]=useState(
        {
            objectFit: 'cover',
            height:'100%',
            width:'100%',
            borderRadius:'10px' ,
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
                        Rateing: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px'}}>
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
                        Bản án từ địa ngục
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rateing: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px'}}>
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
                        Bản án từ địa ngục
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rateing: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px'}}>
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
                        Bản án từ địa ngục
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Rateing: 9.5/10
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Thời lượng:'120p'
                    </TextCenter>
                    <TextCenter style={{height:'50px'}}>
                        Số người đang chờ: 900
                    </TextCenter>
                    <TextCenter style={{height:'50px',cursor: 'pointer'}}>
                        <Button style={{padding:'5px 10px 5px 10px'}}>
                            Vào rạp
                        </Button>
                    </TextCenter>
                </div>
            </div>
        </div>
    )
}