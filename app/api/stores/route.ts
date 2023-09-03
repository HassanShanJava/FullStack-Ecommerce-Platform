import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const body = await req.json()
        const { name } = body
        console.log({name})
        if (!name) {
            return new NextResponse("Name is Required", { status: 400 })
        }

        const store =await prismadb.store.create({
            data: {
                name,
                userId
            }
        })
        return NextResponse.json(store)

    } catch (error) {
        console.log({ error }, '[STORES_POST]')
        return new NextResponse("Internal error", { status: 500 })
    }

}