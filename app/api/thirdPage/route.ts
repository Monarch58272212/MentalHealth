import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const thirdPostData = await prisma.thirdPage.create({
      data: {
        thirdImage: data.thirdImage,
        title: data.title,
        description: data.description,
      },
    });

    return NextResponse.json(thirdPostData, { status: 201 });
  } catch (error) {
    console.log(`error dire dapit sa thirdroute ${error}`);
  }
}

export async function GET() {
  try {
    const getThirdData = await prisma.thirdPage.findMany();
    return NextResponse.json(getThirdData, { status: 201 });
  } catch (error) {
    console.log(`atay brad mali ka sa routes 3rd nimo ${error}`);
  }
}
