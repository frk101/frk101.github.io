import { useTranslation } from "react-i18next";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const ServicesBox = () => {
  const { t } = useTranslation("services");
  const items = t("items", { returnObjects: true }); // JSON'dan dizi çekiyoruz

  // 🔹 İkon bileşenleri — JSX olarak değil, component referansı olarak
  const icons = [
    HiMiniComputerDesktop,
    MdOutlinePhoneAndroid,
    AiFillLayout,
    MdSecurity,
  ];

  // 🔹 Renk arkaplanları
  const bgColors = [
    "bg-blue-600/60",
    "bg-green-600/60",
    "bg-purple-600/60",
    "bg-orange-500/60",
  ];

  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((service, index) => {
          const Icon = icons[index];
          const bgColor = bgColors[index];

          return (
            <div
              key={service.name}
              style={{
                backgroundImage: `url(https://picsum.photos/600/30${index})`,
              }}
              className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
            >
              <div className="p-4 md:p-10 backdrop-blur-sm space-y-3 rounded-xl">
                <Icon className="text-4xl" />
                <h1 className="text-2xl font-bold">{service.name}</h1>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesBox;
