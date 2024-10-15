import { NextRequest, NextResponse } from "next/server";

import schema from "../schema";


export function GET(
    request: NextRequest,
    {params}: {params: {id: number}}){
        if(params.id>10){
            return NextResponse.json({error: 'User not found'}, {status: 404});
        }
        return NextResponse.json({id:1, name: 'Mosh'});
}


export async function PUT(
    request: NextRequest,
    {params}: {params: {id: number}}){
        //Validate the request body
        const body = await request.json();

        const validation = schema.safeParse(body);

        if(!validation.success){
            return NextResponse.json(validation.error.errors, {status:400})

        }

        //Fetch the user with the given id

        if(params.id > 10){
            return NextResponse.json({error: 'User not found'}, {status: 404});
        }

        //update user
        //return the user
        return NextResponse.json({id:1, name:body.name})

}

export function DELETE(
    request: NextRequest,
    {params}: {params: {id: number}}){
        if(params.id > 10){
            return NextResponse.json({error:'User not found'}, {status: 404})
        };


        return NextResponse.json({});

}
    


