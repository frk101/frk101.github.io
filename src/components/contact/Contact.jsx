import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sol Bilgi Paneli */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              İletişim
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              Benimle iletişime geçmek için formu doldurabilir veya aşağıdaki
              bilgilerden ulaşabilirsin.
            </p>

            <div className="space-y-4 text-sm text-gray-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <FiMail className="text-xl text-primary" />
                <a href="mailto:frkalbayrak101@gmail.com" className="underline">
                  frkalbayrak101@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-xl text-primary" />
                <a href="tel:+905418019560" className="underline">
                  +90 541 801 95 60
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Teşekkürler! Form gönderildi.");
            }}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg space-y-6"
          >
            <div>
           <label
  htmlFor="name"
  className="block mb-1 font-semibold text-gray-700 dark:text-slate-300"
>
  İsim
</label>
              <input
                type="text"
                id="name"
                placeholder="Adınız"
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-primary"
              />
            </div>

            <div>
           <label
  htmlFor="email"
  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
>
  E-posta
</label>
              <input
                type="email"
                id="email"
                placeholder="ornek@mail.com"
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-primary"
              />
            </div>

            <div>
               <label
  htmlFor="message"
  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
>
  E-posta
</label>
              <textarea
                id="message"
                placeholder="Mesajınızı buraya yazın..."
                rows="5"
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
