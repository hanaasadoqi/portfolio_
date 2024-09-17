import { fetchAboutAssets } from "@/app/actions/assets";
import { NextResponse } from "next/server";

export async function GET() {
  const assets = await fetchAboutAssets();
  return NextResponse.json(assets)
}