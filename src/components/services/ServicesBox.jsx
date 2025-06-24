import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid, MdSecurity } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";

const Services = [
  {
    name: "Web Uygulama Geliştirme",
    description:
      "React.js ve Next.js ile SEO uyumlu, modern ve performanslı web uygulamaları geliştiriyorum.",
    image: "https://picsum.photos/600/300?grayscale",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-blue-600/60",
  },
  {
    name: "Mobil Uygulama Geliştirme",
    description:
      "React Native ile hem Android hem de iOS platformları için native hissiyat veren mobil uygulamalar üretiyorum.",
    image: "https://picsum.photos/600/301?grayscale",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-green-600/60",
  },
  {
    name: "UI / UX Tasarımı",
    description:
      "Kullanıcı deneyimini önceliklendiren, sade ve etkili arayüz tasarımları oluşturuyorum.",
    image: "https://picsum.photos/600/302?grayscale",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-purple-600/60",
  },
  {
    name: "API & Backend Geliştirme",
    description:
      "Node.js & Express.js ile güçlü, güvenli ve ölçeklenebilir REST API servisleri geliştiriyorum.",
    image: "https://picsum.photos/600/303?grayscale",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/60",
  },
];

const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-4 md:p-10 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
