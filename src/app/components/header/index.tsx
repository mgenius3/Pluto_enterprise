'use client'

import { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";

export default function Header({ active_no }: { active_no: Number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.main}>
      <main className="flex justify-between items-center">
        <div className="sm:p-2">
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div className={`${styles.link} ${menuOpen ? styles.openMenu : ""}`}>
          <Link href={"/"}>
            <p className={`${active_no == 0 ? styles.active : ""}`}>Home</p>
          </Link>

          <Link href={"/about_us"}>
            <p className={`${active_no == 1 ? styles.active : ""}`}>About</p>
          </Link>

          <Link href={"/contact"}>
            <p className={`${active_no == 3 ? styles.active : ""}`}>Contact</p>
          </Link>

          <Link href={"/blog"}>
            <p className={`${active_no == 4 ? styles.active : ""}`}>Blog</p>
          </Link>
        </div>

        <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/menu.svg" alt="Menu Icon" />
        </div>
      </main>
    </header>
  );
}
