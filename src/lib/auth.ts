// src/lib/auth.ts
import jwt, {SignOptions} from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

export function signToken(payload: Record<string, any>) {
  const options: SignOptions = { expiresIn: JWT_EXPIRES_IN as any };
  return jwt.sign(payload, JWT_SECRET as string, options);
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

export function createSetCookieResponse(token: string) {
  const cookie = serialize("token", token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  const res = new NextResponse(JSON.stringify({ ok: true }), { status: 200 });
  res.headers.set("Set-Cookie", cookie);
  return res;
}

export function createClearCookieResponse() {
  const cookie = serialize("token", "", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });
  const res = new NextResponse(JSON.stringify({ ok: true }), { status: 200 });
  res.headers.set("Set-Cookie", cookie);
  return res;
}
