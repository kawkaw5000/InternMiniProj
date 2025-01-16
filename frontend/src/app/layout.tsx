import '../styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50 flex items-center justify-between p-4 border-l-2 border-r-2 border-b-2 border-black rounded-bl-full rounded-br-full">
          <h1 className="text-xl font-bold"></h1>
          <nav>
            <ul className="flex space-x-16 relative top-7 right-24 bg-white pl-7 pr-7">
              <li><a href="#" className="hover:underline ">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="min-h-screen pt-20 p-4">{children}</main>
      </body>
    </html>
  );
}
