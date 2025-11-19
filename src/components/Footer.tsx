import { personalData } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">About</a>
        <a href="#experience" className="link link-hover">Experience</a>
        <a href="#skills" className="link link-hover">Skills</a>
        <a href="#contact" className="link link-hover">Contact</a>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - {personalData.name}</p>
      </aside>
    </footer>
  );
}

