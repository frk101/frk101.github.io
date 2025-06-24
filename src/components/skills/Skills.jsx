import SkillsLevel from "./SkillsLevel.jsx";

const Skills = () => {
  return (
    <section id="skills" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Başlık */}
          <div className="sm:order-2 relative font-bold">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Yeteneklerim
            </h1>
          </div>

          {/* Skill Barlar */}
          <div className="sm:order-1 text-slate-600 dark:text-slate-300 space-y-4">
            {/* Frontend */}
            <SkillsLevel skillName="React.js" percentage="99%" />
            <SkillsLevel skillName="React Native" percentage="99%" />
            <SkillsLevel skillName="Next.js" percentage="80%" />
            <SkillsLevel skillName="Tailwind CSS" percentage="90%" />
            <SkillsLevel skillName="JavaScript" percentage="92%" />
            <SkillsLevel skillName="TypeScript" percentage="85%" />
            <SkillsLevel skillName="HTML" percentage="95%" />
            <SkillsLevel skillName="CSS / Sass" percentage="90%" />

            {/* Backend */}
            <SkillsLevel skillName="Node.js" percentage="85%" />
            <SkillsLevel skillName="Express.js" percentage="80%" />
            <SkillsLevel skillName="MongoDB" percentage="75%" />
            <SkillsLevel skillName="Firebase" percentage="78%" />
            <SkillsLevel skillName="RESTful API" percentage="80%" />

            {/* Diğer */}
            <SkillsLevel skillName="Git & GitHub" percentage="95%" />
            <SkillsLevel skillName="Figma" percentage="70%" />
            <SkillsLevel skillName="Postman" percentage="99%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
