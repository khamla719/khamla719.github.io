import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="navbar fixed top-0 z-50 bg-base-100/60 backdrop-blur-lg border-b border-base-content/10 supports-[backdrop-filter]:bg-base-100/60">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tight hover:bg-transparent">
            Khamla Phimmachack<span className="text-primary">.</span>
          </Link>
        </div>
        <div className="flex-none hidden sm:block">
          <ul className="menu menu-horizontal px-1 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none sm:hidden">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100/90 backdrop-blur-md rounded-box w-52 border border-base-content/10">
               {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
