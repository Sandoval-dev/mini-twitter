import LogoutButton from "./LogoutButton";
import NavbarClient from "./NavbarClient";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export default async function Navbar() {
  const cookieStore =await cookies();
  const token = cookieStore.get("token")?.value;
  const payload = token ? verifyToken(token as string) as any : null;

  return <NavbarClient user={payload} />;
}
