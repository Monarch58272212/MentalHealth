import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const postData = await prisma.secondPage.create({
      data: {
        secondImage: data.secondImage,
        description: data.description,
      },
    });
    return NextResponse.json(postData, { status: 201 });
  } catch (error) {
    console.error('Error creating second page data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const allData = await prisma.secondPage.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(allData, { status: 200 });
  } catch (error) {
    console.error('Error fetching second page data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
