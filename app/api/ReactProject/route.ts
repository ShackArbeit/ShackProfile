import { NextRequest, NextResponse } from "next/server";
import React1 from '../../../public/Image/React1.png'

const reactContent=[
    {id:1,title:'Taiwan Food',imgurl:React1,dec:'Use ReactJs to build a static web page for Liang Shehan, a famous restaurant chain in Taiwan',giturl:'https://github.com/ShackLin/TaiwanFood-Demo',demourl:'https://taiwanfood-demo.pages.dev/'},
    {id:2,title:'Taiwan Food2',imgurl:React1,dec:'Use ReactJs to build a static web page for Liang Shehan, a famous restaurant chain in Taiwan',giturl:'https://github.com/ShackLin/TaiwanFood-Demo',demourl:'https://taiwanfood-demo.pages.dev/'}
]


export async function GET(){
    return new NextResponse(JSON.stringify(reactContent))
}