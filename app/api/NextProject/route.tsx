import { NextResponse } from "next/server";
import Next1 from '../../../public/Image/Next1.png'

const nextContent=[
    {id:1,title:'Share Your Options',imgUrl:Next1,dec:'Build with NextJs with MongoDB database, let user can create their and see other users options in this platform !',giturl:'https://github.com/ShackArbeit/FirstNextOne',demourl:'https://beamish-arithmetic-d8c9fc.netlify.app/'}
]

export async function GET(){
    return new NextResponse(JSON.stringify(nextContent))
}