
import { NextResponse } from "next/server";
const reactSpan=[
  {id:1,content: ['ReactJs','Static Page','Style Component','React Hook','AntD']},
  { id:2,content:['ReactJs','Static Page','Context API Hook','Fetch API','CSS Module']}
]
export async function GET(){
    return new NextResponse(JSON.stringify(reactSpan))
}