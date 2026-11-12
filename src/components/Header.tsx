import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import styles from "./Header.module.css";

export function Header({ currentPage = "work" }: { currentPage?: "work" | "about" | "resume" | "research" }) {
  return <header className={styles.header}>
    <Link href="/" className={styles.identity}>
      <strong>{profile.name}</strong>
      <span>Founder. Educator, Techie</span>
    </Link>
    <nav aria-label="Main navigation" className={styles.switcher}>
      <Link href="/" aria-current={currentPage === "work" ? "page" : undefined}>Work</Link>
      <Link href="/about" aria-current={currentPage === "about" ? "page" : undefined}>About Me</Link>
      <Link href="/research" aria-current={currentPage === "research" ? "page" : undefined}>Research</Link>
    </nav>
    <div className={styles.links}>
      <a href={profile.linkedin}>LinkedIn <ArrowUpRight size={18} aria-hidden /></a>
      <Link href="/resume" aria-current={currentPage === "resume" ? "page" : undefined}>Resume <ArrowUpRight size={18} aria-hidden /></Link>
    </div>
  </header>;
}
