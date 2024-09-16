import { NextResponse } from 'next/server';
import { fetchAssets } from '../../actions';

export async function GET() {
  const assets = await fetchAssets();
  return NextResponse.json(assets);
}