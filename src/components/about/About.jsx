import { useTranslation, Trans } from "react-i18next";

const About = () => {
  const { t: tAbout } = useTranslation("about");

  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="relative font-bold">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              {tAbout("about")}
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              {tAbout("about").toUpperCase()}
            </h1>
          </div>

          <div className="text-slate-600 dark:text-slate-300">
            <Trans
              i18nKey="description"
              ns="about"
              components={{ strong: <strong /> }}
            />
            <br />
            <p>{tAbout("description2")}</p>

            <div>
              <a
                href="/Faruk.pdf"
                download
                className="primary-btn inline-block my-6 mr-6"
              >
                {tAbout("downloadCv")}
              </a>
              <a href="tel:+905418019560" className="outline-btn inline-block">
                {tAbout("contactMe")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
