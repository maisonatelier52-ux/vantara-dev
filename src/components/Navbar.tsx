import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-300 text-[#240605]">
      <div className="flex items-center justify-between px-3 md:px-8 py-6 md:py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:opacity-80 transition-opacity font-normal text-5xl  capitalize" style={{ fontFamily: "'Brush Script MT', cursive" }}>
            Vantara
          </Link>
        </div>
        <div className="flex items-center gap-0 md:gap-3 lg:gap-5 font-semibold">
          <Link href="#flavours" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">FLAVOURS</Link>
          <Link href="#process" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">PROCESS</Link>
          <a href="https://maps.app.goo.gl/fkfnTHE2rX7a38jU9" target="_blank" rel="noopener noreferrer" className="text-sm tracking-tight px-2 hover:opacity-70 transition-all underline decoration-transparent hover:decoration-current underline-offset-4">FIND US</a>
        </div>
      </div>
    </nav>
  );
}
