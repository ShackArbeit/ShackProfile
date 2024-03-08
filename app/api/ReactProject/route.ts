import {  NextResponse } from "next/server";
import React1 from '../../../public/Image/React1.png'
import React2 from '../../../public/Image/React2.png'

const reactContent=[
    {id:1,title:'Taiwan Food',imgurl:React1,dec:'Use ReactJs to build a static web page for Liang Shehan, a famous restaurant chain in Taiwan',giturl:'https://github.com/ShackLin/TaiwanFood-Demo',demourl:'https://taiwanfood-demo.pages.dev/'},
    {id:2,title:'Card Shop ',imgurl:React2,dec:'Use ReactJs to build a static web page to simulate a Simple Shopping Network',giturl:'https://github.com/ShackLin/Simple-Card-Shop',demourl:'https://simple-card-shop.pages.dev/'}
]


export async function GET(){
    return new NextResponse(JSON.stringify(reactContent))
}