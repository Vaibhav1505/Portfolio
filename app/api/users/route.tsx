import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({message:"This is demo API call related to next js users"})
}