import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  compact?: boolean;
}

export default function LanguageSwitcher({
  compact = false,
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language;

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  if (compact) {
    // ✅ Küçük versiyon (örneğin Navbar içinde)
    return (
      <select
        aria-label="Language"
        value={current}
        onChange={(e) => change(e.target.value)}
        className="bg-transparent dark:text-white border border-gray-300 dark:border-slate-600 rounded-md px-2 py-1 text-sm"
      >
        <option value="tr">🇹🇷 TR</option>
        <option value="en">🇬🇧 EN</option>
      </select>
    );
  }

  // ✅ Geniş versiyon (örneğin footer veya settings ekranında)
  return (
    <div className="flex gap-3 items-center">
      <button
        onClick={() => change("tr")}
        aria-pressed={current === "tr"}
        className={`flex items-center gap-2 px-3 py-2 rounded-md border ${
          current === "tr"
            ? "border-primary bg-primary/10 text-primary"
            : "border-transparent hover:bg-gray-100 dark:hover:bg-slate-800"
        } transition`}
      >
        <span>🇹🇷 TR</span>
      </button>

      <button
        onClick={() => change("en")}
        aria-pressed={current === "en"}
        className={`flex items-center gap-2 px-3 py-2 rounded-md border ${
          current === "en"
            ? "border-primary bg-primary/10 text-primary"
            : "border-transparent hover:bg-gray-100 dark:hover:bg-slate-800"
        } transition`}
      >
        <span>🇬🇧 EN</span>
      </button>
    </div>
  );
}
