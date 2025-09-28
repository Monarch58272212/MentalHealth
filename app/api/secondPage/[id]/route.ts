import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'ID is required' },
        { status: 400 },
      );
    }

    const deleted = await prisma.secondPage.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: `${error}, "how sad"` },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const data = await request.json();
  if (!data.secondImage || !data.description) {
    return NextResponse.json(
      { success: false, message: 'lagyan lahat oii' },
      { status: 400 },
    );
  }
  try {
    const { id } = await params;
    const updated = await prisma.secondPage.update({
      where: { id: Number(id) },
      data: {
        secondImage: data.secondImage,
        description: data.description,
      },
    });
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: 'naay mali imong server sa update paki check',
      },
      { status: 500 },
    );
  }
}
