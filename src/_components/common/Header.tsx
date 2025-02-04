import Link from "next/link";
import { IcoAccount, IcoLogout, Logo } from "../icons";
import { useAuth } from "@/_hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const { logout, isLogin } = useAuth();

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);

  return (
    <header className="fixed top-0 flex items-center justify-between shadow-header bg-white px-10 z-50 w-full h-20">
      <Link href="/">
        <Logo size={30} className="hidden md:inline-block" />
      </Link>

      <ul className="hidden text-xl font-semibold md:flex gap-x-24 text-header-black">
        <li>
          <Link href="/programs">프로그램관리</Link>
        </li>

        <li>
          <Link href="/users">사용자 관리</Link>
        </li>
      </ul>

      <ul className="flex gap-x-3">
        <li className="hidden md:inline-block">
          <Link href="/my?type=program">
            <IcoAccount />
          </Link>
        </li>
        <li className="hidden cursor-pointer md:inline-block">
          <IcoLogout onClick={logout} />
        </li>
      </ul>
    </header>
  );
}
