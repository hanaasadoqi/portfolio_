import { NextResponse } from "next/server";
import { fetchProjects } from "../../projects/actions"
export async function GET() {
  const projects = await fetchProjects();
  return NextResponse.json(projects);
}

