import '../styles/globals.css'
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 left-0 w-full bg-white text-black z-50 flex items-center justify-between p-4 border-l border-r border-b border-black rounded-bl-full rounded-br-full">
          <h1 className="text-xl font-bold"></h1>
          <nav>
            <ul className="flex space-x-16 relative top-7 right-24 bg-white pl-7 pr-7 rounded-2xl">
              <li><a href="#" className="hover:underline ">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>      
            </ul>
            <div style={{ position: 'absolute', top: '19px', left:'55px', width: '200px'}}>
              <Image
                  src="/LogoIcon/LAnew 1.png"
                  alt="file"
                  width={50}
                  height={100}
                />
            </div>
            <div style={{ position: 'absolute', top: '43px', left:'115px', width: '130px', backgroundColor: 'white', textAlign: 'center', borderRadius: '5px'}}>
              <p>Lexer Amorcillo</p>
            </div>
          </nav>
        </header>
        <main className="min-h-screen pt-20 p-4">{children}</main>
      </body>
    </html>
  );
}
