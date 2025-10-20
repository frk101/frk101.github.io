import { useTranslation } from "react-i18next";
import { projects } from "../../data/projects";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-slate-900 dark:text-white"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary inline-block pb-1">
          {t("title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => {
            const title = t(`items.${project.id}.title`);
            const description = t(`items.${project.id}.description`);

            return (
              <div
                key={project.id}
                className="bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
              >
                {project.image && (
                  <div className="flex justify-center bg-white dark:bg-slate-700">
                    {/* Logo/ikon tam gözüksün: object-contain + sabit yükseklik + padding */}
                    <img
                      src={project.image}
                      alt={title}
                      className="h-28 w-auto object-contain mx-auto mt-4 mb-2 p-2"
                    />
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold">{title}</h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={`${project.id}-${tech}-${i}`}
                        className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 underline"
                      >
                        {t("store")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 italic">
          {t("confidentialNote")}
        </p>
      </div>
    </section>
  );
};

export default Projects;
