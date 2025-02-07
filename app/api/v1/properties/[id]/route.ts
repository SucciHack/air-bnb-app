import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//GET SINGLE
export async function GET(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    try {
        const {id} = await params
    const singleProduct = await db.property.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json({
        data:singleProduct,
        message:"fetched successfuly",
        error: null
    },{
        status:200
    })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error: "failed to fetch"
        },{
            status:500
        })
    }
}