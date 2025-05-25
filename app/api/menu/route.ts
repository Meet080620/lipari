import { connectDB } from '@/lib/db';
import { MenuItem } from '@/models/MenuItem';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const items = await MenuItem.find();
    return NextResponse.json(items);
  } catch (error) {
    console.error('GET /api/menu error:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newItem = await MenuItem.create(data);
    return NextResponse.json(newItem, { status: 201 });
  } catch (error: any) {
    console.error('POST /api/menu error:', error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
