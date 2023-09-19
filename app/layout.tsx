export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>[placeholder for header]</header>
        <main>{children}</main>
        <footer>[placeholder for footer]</footer>
      </body>
    </html>
  );
}
