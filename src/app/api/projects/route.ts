import { NextResponse } from "next/server";
import { fetchProjects, fetchProjectsByQuery } from "@/app/lib/actions/projects"

export async function GET() {
  const projects = await fetchProjects();
  return NextResponse.json(projects);
}

