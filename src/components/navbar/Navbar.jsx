import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = () => {
  const { t: tNav } = useTranslation("navbar");
  const { t: tCommon } = useTranslation("common");

  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const navMenus = [
    { name: tNav("home"), link: "#home" }, // sadece bu en üste scroll
    { name: tNav("about"), link: "#about" },
    { name: tNav("skills"), link: "#skills" },
    { name: tNav("services"), link: "#services" },
    { name: tNav("projects"), link: "#projects" },
    { name: tNav("contact"), link: "#contact" },
  ];

  const toggleMenu = () => setShowMenu((s) => !s);

  // Dil alt yolunu (örn. /en) koru
  const basePath =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/$/, "")
      : "";

  const goToHash = useCallback(
    (hash) => {
      if (!hash?.startsWith("#")) return;

      // ✅ SADECE HOME İÇİN EN ÜSTE SCROLL
      if (hash === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", `${basePath}${hash}`);
        return;
      }

      // Diğer bölümler: hedef elemana scroll
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `${basePath}${hash}`);
      } else {
        // Eleman bulunmadıysa yine de URL hash güncelle
        window.location.href = `${basePath}${hash}`;
      }
    },
    [basePath]
  );

  const handleNavClick = useCallback(
    (e, href) => {
      if (href?.startsWith("#")) {
        e.preventDefault();
        goToHash(href);
        setShowMenu(false);
      }
    },
    [goToHash]
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-secondary/80 dark:bg-gray-900/70 dark:text-white
        backdrop-blur-md border-b border-black/5 dark:border-white/10
      "
      role="navigation"
      aria-label={tCommon("navbar.ariaMainNav", "Main navigation")}
    >
      <div className="container mx-auto flex justify-between items-center py-3 sm:py-0">
        {/* Logo / Title */}
        <a
          href={`${basePath}#home`}
          onClick={(e) => {
            e.preventDefault();
            goToHash("#home"); // 👈 en üste scroll
          }}
          className="text-2xl text-primary font-bold focus:outline-none rounded-md"
        >
          {tNav("a_journey_with_codes")} 🚀
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <ul className="flex items-center gap-2">
            {navMenus.map((menu) => (
              <li key={menu.link}>
                <a
                  href={`${basePath}${menu.link}`}
                  onClick={(e) => handleNavClick(e, menu.link)}
                  className="text-[1.05rem] font-semibold px-2 py-4 md:py-6 inline-block"
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pl-2">
            <LanguageSwitcher compact />
            <button
              type="button"
              aria-label={
                theme === "dark"
                  ? tCommon("navbar.lightMode", "Light mode")
                  : tCommon("navbar.darkMode", "Dark mode")
              }
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
            >
              {theme === "dark" ? (
                <BiSolidSun className="text-2xl" />
              ) : (
                <BiSolidMoon className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Right */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageSwitcher compact />
          <button
            type="button"
            aria-label={
              theme === "dark"
                ? tCommon("navbar.lightMode", "Light mode")
                : tCommon("navbar.darkMode", "Dark mode")
            }
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
          >
            {theme === "dark" ? (
              <BiSolidSun className="text-2xl" />
            ) : (
              <BiSolidMoon className="text-2xl" />
            )}
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
            aria-label={tCommon("navbar.menuToggle", "Toggle menu")}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          id="mobile-menu"
          className="
            sm:hidden
            border-t border-black/5 dark:border-white/10
            bg-white dark:bg-gray-900 dark:text-white
            shadow-md z-40
          "
        >
          <ul className="flex flex-col items-stretch gap-1 py-2">
            {navMenus.map((menu) => (
              <li key={menu.link}>
                <a
                  href={`${basePath}${menu.link}`}
                  onClick={(e) => handleNavClick(e, menu.link)}
                  className="
                    block w-full text-center text-lg font-semibold px-4 py-3
                    hover:bg-black/5 dark:hover:bg-white/10
                    focus:outline-none
                  "
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
