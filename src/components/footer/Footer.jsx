import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-8 dark:bg-slate-950 bg-gray-100 dark:text-white text-gray-700">
      {/* Sosyal Medya */}
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a
          href="https://github.com/frk101"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/farukalbayrak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/frkalbayrak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/frkalbayrak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://medium.com/@frkalbayrak"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition"
        >
          <FaMedium />
        </a>
      </div>

      {/* Telif Hakkı */}
      <p className="text-sm px-4">
        &copy; {new Date().getFullYear()} Faruk Albayrak • Tüm hakları saklıdır. <br />
        Geliştirildi <span className="text-red-500">❤</span> ile ve bolca{" "}
        <span className="font-mono">console.log()</span> ile.
      </p>
    </footer>
  );
};

export default Footer;
