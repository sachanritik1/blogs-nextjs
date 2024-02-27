import Link from "next/link";

export function Home() {
  return (
    <div className="bg-red-500 w-20 h-20">
      <h1>Home</h1>
      <Link href="/watch/1">Watch 1</Link>
    </div>
  );
}
