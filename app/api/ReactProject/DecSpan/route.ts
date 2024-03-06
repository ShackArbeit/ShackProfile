import NextNodeServer from "next/dist/server/next-server";
import { NextResponse } from "next/server";

const reactSpan=[
    ['ReactJs','Static Page','Style Component','React Hook','AntD']
]


export async function GET(){
    return new NextResponse(JSON.stringify(reactSpan))
}