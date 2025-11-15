// src/app/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import { createClearCookieResponse } from "@/lib/auth";

export async function POST() {
  return createClearCookieResponse();
}
