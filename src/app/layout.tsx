import "./global.css";

export const metadata = {
  title: "Sachan Blogs",
  description: "This is a blogging website about programming and coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
