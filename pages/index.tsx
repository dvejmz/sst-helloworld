import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className={`flex min-h-screen items-center ${inter.className}`}
  >
      <Image
      src="/leo.avif"
      alt="Leo the cat"
      width={600}
      height={24}
      priority
    />
      </main>
  );
}
