import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//POST
export async function POST(request:NextRequest) {
    try {
        const data = await request.json()
        const newProperty = await db.property.create({
        data
    })
    console.log(newProperty)
    return NextResponse.json({
        data:newProperty,
        message:"created successfully",
        error: null
    },{
        status:201
    })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error: "failed to create"
        },{
            status:500
        })
    }
}
//GET
export async function GET() {
    try {
        const Properties = await db.property.findMany()
        return NextResponse.json({
            data:Properties,
            message:"fetched successfully",
            error:null
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to fetch"
        },{
            status:500
        })
    }
}

