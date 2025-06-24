import myPhoto from "../../assets/my-photo.jpeg";

const Hero = () => {
  return (
    <main className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
      <div className="container grid grid-cols-1 sm:grid-cols-2 items-center space-y-2 py-12 sm:py-0 sm:h-[600px] px-4 sm:px-0">
        <div>
          <div className="space-y-4 grid justify-items-center sm:justify-items-start">
            <p className="uppercase tracking-wider text-lg text-gray-600 dark:text-gray-300">
              Merhaba 👋
            </p>
            <p className="text-4xl md:text-5xl font-bold text-black/80 dark:text-white">
              Ben Faruk Albayrak
            </p>
            <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300">
              Full Stack Developer & Mobil Uygulama Geliştiricisi
            </p>
            <p className="text-black/75 dark:text-white/70 text-center sm:text-left max-w-md">
              Kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştirmeye tutkuyla bağlı bir yazılım geliştiricisiyim. React.js, React Native ve Node.js ile yaratıcı projelere hayat veriyorum.
            </p>
            <a
              href="mailto:frkalbayrak101@gmail.com"
              className="inline-block primary-btn !px-6"
            >
              Benimle İletişime Geç
            </a>
          </div>
        </div>

        {/* Fotoğraf Alanı */}
        <div className="flex justify-center items-center mt-6 sm:mt-0">
          <div className="relative w-[350px]">
            <img
              src={myPhoto}
              alt="Faruk Albayrak"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/05 dark:bg-black/40 rounded-lg"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
