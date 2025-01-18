"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/app/logo.svg"; // Import the logo directly

const navItems = [
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Tutorial", href: "/how-to" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg">
        <Link href="/">
          <Image
            src={Logo} // Use the imported logo
            alt="VaaniVerse Logo"
            width={150}
            height={50}
            className="w-auto h-12"
          />
        </Link>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-white hover:text-[#FB773C] transition-colors",
                pathname === item.href && "text-[#FB773C]"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="bg-[#EB3678] hover:bg-[#FB773C] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}