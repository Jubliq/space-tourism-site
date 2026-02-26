import Link from "next/link";
import logo from "@/public/shared/logo.svg";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="px-8 w-36">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="Space tourism logo"
        quality={75}
      />
    </Link>
  );
}

export default Logo;
