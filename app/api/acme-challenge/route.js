import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL(request.url);
  const pathSegments = url.pathname.replace('/api/acme-challenge/', '').split('/');
  const filePath = path.join(process.cwd(), 'public', '.well-known', 'acme-challenge', ...pathSegments);
  
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return new NextResponse(content, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' }
      });
    } else {
      return new NextResponse('File not found', { status: 404 });
    }
  } catch (error) {
    console.error('Error reading file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 