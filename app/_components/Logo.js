import Link from "next/link";
import logo from "@/public/shared/logo.svg";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="Space tourism logo"
        quality={100}
      />
    </Link>
  );
}

export default Logo;
