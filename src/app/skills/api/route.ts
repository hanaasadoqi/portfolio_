import { NextResponse } from "next/server";
import { fetchSkills } from "../actions";
export async function GET() {
  const { skills } = await fetchSkills();
  return NextResponse.json({ skills });
}

