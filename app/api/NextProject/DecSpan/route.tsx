
import { NextResponse } from "next/server";
const nextSpan=[
  {id:1,content: ['NextJs','API Router','Tailswind CSS ','MongoDB','Google Auth']},
  
]
export async function GET(){
    return new NextResponse(JSON.stringify(nextSpan))
}