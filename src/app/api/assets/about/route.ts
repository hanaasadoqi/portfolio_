import { fetchAboutAssets } from "@/app/lib/actions/assets";
import { NextResponse } from "next/server";

export async function GET() {
  const assets = await fetchAboutAssets();
  return NextResponse.json(assets)
}