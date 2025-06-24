
const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Sol Başlık */}
          <div className="relative font-bold">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Hakkımda
            </h1>
          </div>

          {/* Sağ Açıklama */}
          <div className="text-slate-600 dark:text-slate-300">
            <p>
              Merhaba, ben <strong>Faruk Albayrak</strong>. React.js ve React Native
              teknolojileriyle modern ve kullanıcı dostu arayüzler geliştiren bir yazılım geliştiricisiyim.
              Web ve mobil uygulama geliştirme konularında full stack çözümler üretiyorum.
            </p>
            <br />
            <p>
              Kod yazarken sadece işlevselliğe değil, aynı zamanda estetik ve kullanıcı deneyimine de önem veririm.
              Yazılım geliştirme sürecinde her zaman öğrenmeye açık, detaycı ve çözüm odaklıyım.
            </p>

            <div>
              <a
                href="/Faruk-Albayrak-CV.pdf"
                download
                className="primary-btn inline-block my-6 mr-6"
              >
                CV’yi İndir
              </a>
              <a href="tel:+905418019560" className="outline-btn inline-block">
                İletişime Geç
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
