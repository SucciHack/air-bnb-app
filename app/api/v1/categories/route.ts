import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//POST
export async function POST(request:NextRequest) {
    const data = await request.json()
    const newCategory = await db.category.create({
        data
    })
    try {
        console.log(newCategory)
        return NextResponse.json({
            data: newCategory,
            message: "created successfully",
            error:null
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data: null,
            message: "failed to create",
        },{
            status:500
        })
    }
}

//GET
export async function GET() {
    try {
        const categories = await db.category.findMany(
            {include:{
                property:true
            }}
        )
        return NextResponse.json({
            data:categories,
            messages: "fetched successfully",
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
