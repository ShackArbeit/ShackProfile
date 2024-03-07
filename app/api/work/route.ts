import { NextResponse } from "next/server"
import Fin  from '../../../public/Image/Fin.jpg'
import Trend from '../../../public/Image/Trend.jpg'

const profileData=[
    {name:"Trend-Go Co., Ltd.",title:'Frontend Engine',period:'Oct 2023 - Present',url:Trend,Date:'Oct 5 2023'},
    {name:"Himalaya Technology Co., Ltd.",title:'Frontend Engine',period:'July 2023 - Oct 2023',url:Trend,Date:'July 5 2023'},
    {name:"Fiscal Information Center of the Ministry of Finance",title:'Assistant Programmer',period:'Jan 2023 -July 2023',
    url:Fin,Date:'Jan 9 2023'},
]



export async function GET(){
    return new NextResponse(JSON.stringify(profileData))
}