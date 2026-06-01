import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Mail, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function MyNavbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <Navbar 
      maxWidth="xl" 
      className="fixed top-4 inset-x-0 mx-auto w-11/12 max-w-5xl rounded-full glass-panel !bg-white/80 dark:!bg-zinc-900/40 transition-colors duration-300"
    >
      <NavbarBrand>
        <p className="font-heading font-black text-2xl tracking-tight text-zinc-900 dark:text-white">
          Vaibhav<span className="text-brand-500">.</span>
        </p>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {['About', 'Tech', 'Projects', 'Experience'].map((item) => (
          <NavbarItem key={item}>
            <Link 
              className="text-zinc-400 hover:text-white transition-colors text-sm font-bold" 
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem className="hidden lg:flex gap-3">
          <Link href="https://github.com/Vaibhav1505" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/vaibhav-s-a697581b5/" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </Link>
          <Link href="https://x.com/Vaibhav08614031" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
            <FaTwitter size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            href="#contact" 
            className="bg-brand-500 text-zinc-50 font-black shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.6)] transition-all font-sans" 
            radius="full"
          >
            Let's Talk
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
