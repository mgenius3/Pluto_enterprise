import styles from "./style.module.css";
import Link from "next/link";

export default function Header({ active_no }: { active_no: Number }) {
  return (
    <header className={styles.main}>
      <main className="flex justify-around items-end">
        <div className="sm:p-2">
          <img src="/logo.svg" />
        </div>
        <div className={styles.link}>
          <Link href={"/"}>
            <p className={`${active_no == 0 ? styles.active : ""}`}>Home</p>
          </Link>

          <Link href={"/about_us"}>
            <p className={`${active_no == 1 ? styles.active : ""}`}>About</p>
          </Link>

          {/* <Link href={"/services"}>
            <p className={`${active_no == 2 ? styles.active : ""}`}>Services</p>
          </Link> */}

          <Link href={"/contact"}>
            <p className={`${active_no == 3 ? styles.active : ""}`}>Contact</p>
          </Link>

          <Link href={"/blog"}>
            <p className={`${active_no == 4 ? styles.active : ""}`}>Blog</p>
          </Link>
        </div>

        <div className={styles.menu}>
          <img src='/menu.svg'/>
        </div>
      </main>
    </header>
  );
}
