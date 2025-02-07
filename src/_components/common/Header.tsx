import Link from "next/link";
import { IcoAccount, IcoLogout, Logo } from "../icons";
import { useAuth } from "@/_hooks/useAuth";

export default function Header() {
  const { logout } = useAuth();

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
