import { NextRequest, NextResponse } from "next/server";
import React1 from '../../../public/Image/React1.png'

const reactContent=[
    {title:'Taiwan Food',imgurl:React1,dec:'Use ReactJs to build a static web page for Liang Shehan, a famous restaurant chain in Taiwan',giturl:'www.googlee.com',demourl:'www.goodle.com'}
]


export async function GET(){
    return new NextResponse(JSON.stringify(reactContent))
}