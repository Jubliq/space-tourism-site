import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/" className="">
            <strong>00</strong> HOME
          </Link>
        </li>
        <li>
          <Link
            href="/destination"
            className="hover:text-accent-400 transition-colors"
          >
            <strong>01</strong> DESTINATION
          </Link>
        </li>
        <li>
          <Link
            href="/crew"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <strong>02</strong> CREW
          </Link>
        </li>
        <li>
          <Link
            href="/technology"
            className="hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <strong>03</strong> TECHNOLOGY
          </Link>
        </li>
      </ul>
    </nav>
  );
}
