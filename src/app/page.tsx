import Link from "next/link";

export const Home = () => {
  return (
    <div className="bg-red-500 w-20 h-20">
      <h1>Home</h1>
      <Link href="/watch/1">Watch 1</Link>
    </div>
  );
};

export default Home;
