// app/api/test-connection/route.ts
import { connectDB } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: '✅ MongoDB connected successfully!' });
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    return NextResponse.json({ message: '❌ MongoDB connection failed' }, { status: 500 });
  }
}
