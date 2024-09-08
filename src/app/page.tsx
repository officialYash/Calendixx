import { Calendar, CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
<main className="container">
<header className="flex gap-4 justify-between py-6 text-gray-600 font-light">
 <div className="flex items-center gap-10 ">
  <Link href={'/'} className="text-blue-600 font-bold text-2xl flex gap-2 items-center"><CalendarDays size={32}/> Calendix</Link>
  <nav className="flex gap-4">
    <Link href={'/features'}>Features</Link>
    <Link href={'/about'}>About</Link>
    <Link href={'/pricing'}>Pricing</Link>

  </nav>
  </div>
  <nav className="flex gap-4 items-center">
    <Link href={'/features'}>Sign In</Link>
    <Link href={'/about'} className="bg-blue-600 text-white py-2 px-4 rounded-full ">Get Started</Link>

  </nav>
</header>
</main>
  );
}
