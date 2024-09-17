import { fetchAssets } from "@/app/actions/assets";
import { NextResponse } from "next/server";

export async function GET() {
  const assets = await fetchAssets(1, 10);
  return NextResponse.json({ assets })
}