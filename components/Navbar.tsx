"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMenuOpen(false);
    router.refresh();
  };

  useEffect(() => {
    if (menuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navClasses = `fixed left-0 right-0 top-0 z-50 mx-auto max-w-2xl transition-colors duration-200 ${
    scrolled ? "bg-[#1a1a1a]/60 backdrop-blur-md rounded-2xl" : "bg-transparent"
  }`;

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 mx-auto flex w-full max-w-2xl flex-col items-center justify-center bg-[#1a1a1a]/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-7"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={itemVariants}>
                <Link
                  href="/"
                  className="text-2xl font-bold text-white transition-colors hover:text-white/75"
                  onClick={closeMenu}
                >
                  홈
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/jonghap"
                  className="text-2xl font-bold text-white transition-colors hover:text-white/75"
                  onClick={closeMenu}
                >
                  평생사주
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/sinnyeon"
                  className="text-2xl font-bold text-white transition-colors hover:text-white/75"
                  onClick={closeMenu}
                >
                  2026년 신년운세
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="text-2xl font-bold text-white transition-colors hover:text-white/75"
                  >
                    로그아웃 ({user.user_metadata?.name || "사용자"})
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="text-2xl font-semibold text-amber-300 transition-colors hover:text-amber-200"
                    onClick={closeMenu}
                  >
                    로그인
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={navClasses}>
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/"
            className="text-xl font-bold text-white drop-shadow font-(family-name:--font-deogon)"
          >
            영사주
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white drop-shadow focus:outline-none"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
}
