
import { NextResponse } from "next/server";

const reactSpan=[
   ['ReactJs','Static Page','Style Component','React Hook','AntD'],
   ['ReactJs2','Static Page2','Style Component2','React Hook2','AntD']
]



export async function GET(){
    return new NextResponse(JSON.stringify(reactSpan))
}