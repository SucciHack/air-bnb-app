import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

//GET SINGLE
export async function GET(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const singleCategory = await db.category.findUnique({
        where:{
            id
        },
        include:{
            property:true
        }
    })
    try {
        return NextResponse.json({
            data:singleCategory,
            message: "fetched successfully",
            error:null,
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to fetch",
        },{
            status:500
        })
    }
    
}

//PUT
export async function PUT(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const data = await request.json()
    try {
        const updatedCategory = await db.category.update({
            where:{
                id
            },
            data
        })
        return NextResponse.json({
            data:updatedCategory,
            message: "updated successfully",
            error:null
        },{
            status: 201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            data:null,
            error:"failed to update category"
        },{
            status: 201
        })
    }
}

//DELETE
export async function DELETE(request:NextRequest, {params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    try {
        await db.category.delete({
            where:{
                id
            }
        })
        return NextResponse.json({
            error:null,
            message:"deleted successfully"
        },{
            status:200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error:"failed to delete",
        },{
            status:500
        })
    }
}