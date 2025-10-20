import { FiMail, FiPhone } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const { t } = useTranslation("contact");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    // template'te {{time}} kullanıyorsun
    const timeInput = form.querySelector('input[name="time"]');
    if (timeInput) timeInput.value = new Date().toLocaleString();

    emailjs
      .sendForm(
        "service_7me1gba",
        "template_cy55e1p",
        form,
        "CvSgwp3e9uywXrypv"
      )
      .then(() => {
        toast.success(t("toastSuccess"), {
          style: { background: "#0ea5e9", color: "#fff", fontWeight: "500" },
        });
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error(t("toastError") || "Bir hata oluştu.");
      });
  };

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
              {t("title")}
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mb-6">
              {t("subtitle")}
            </p>

            <div className="space-y-4 text-sm text-gray-700 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <FiMail className="text-xl text-primary" />
                <a
                  href="mailto:frkalbayrak101@gmail.com"
                  className="underline hover:text-primary transition"
                >
                  frkalbayrak101@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-xl text-primary" />
                <a
                  href="tel:+905418019560"
                  className="underline hover:text-primary transition"
                >
                  +90 541 801 95 60
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg space-y-6"
          >
            <input type="hidden" name="time" />

            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-semibold text-gray-700 dark:text-slate-300"
              >
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="user_name" /* EmailJS param */
                placeholder={t("placeholderName")}
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-gray-700 dark:text-slate-300"
              >
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="user_email" /* EmailJS param */
                placeholder={t("placeholderEmail")}
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-semibold text-gray-700 dark:text-slate-300"
              >
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("placeholderMessage")}
                rows={5}
                required
                className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              {t("send")}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contact;
