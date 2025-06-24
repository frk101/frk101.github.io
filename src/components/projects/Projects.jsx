import { projects } from "../../data/projects.js";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-slate-900 dark:text-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-primary inline-block pb-1">
          Projelerim
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
  {project.image && (
    <div className="flex justify-center">
  <img
    src={project.image}
    alt={project.title}
   className="w-32 h-32 rounded-full object-cover mx-auto mt-4 shadow-md"
  />
  </div>
)}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
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
                     Mağaza
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 italic">
          Üzerinde çalıştığım birçok proje var ancak şirketlerin politikaları gereği henüz paylaşamıyorum.
        </p>
      </div>
    </section>
  );
};

export default Projects;
