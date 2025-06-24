import ServicesBox from "./ServicesBox.jsx";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Neler Yapıyorum?
        </h1>
        <p className="text-slate-500 dark:text-slate-300 text-center md:w-[60%] mx-auto">
          Web, mobil ve backend alanlarında kullanıcı dostu, performanslı ve modern çözümler geliştiriyorum. İşte sunduğum bazı hizmetler:
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;
