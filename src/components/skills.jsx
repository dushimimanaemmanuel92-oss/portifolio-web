import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Skills() {
  const skills = [
    { name: "HTML", percent: 95 },
    { name: "CSS", percent: 93 },
    { name: "TailwindCSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "ReactJS", percent: 85 },
    { name: "PHP", percent: 85 },
    { name: "NodeJS", percent: 86 },
    { name: "MYSQL", percent: 80 },
    { name: "MongoDB", percent: 82 },
    { name: "Git", percent: 88 },
    { name: "GitHub", percent: 80 },
    { name: "Python", percent: 70 },
  ];

  const skillsPerPage = 4;

  const [page, setPage] = useState(0);

  const start = page * skillsPerPage;
  const end = start + skillsPerPage;

  const currentSkills = skills.slice(start, end);

  return (
    <section id="Skills" className="min-h-screen w-[86vw] mx-auto mt-14 rounded-4xl bg-gradient-to-r from-[#310149]  via-[#642d6d] to-[#100d18] border-l border-amber-50 rounded-t-9xl rounded-b-none  py-16">

      <h1 className="text-white text-2xl md:text-4xl font-bold text-center mb-10">
        My Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 ">

        {currentSkills.map((skill, index) => (

          <div key={index} className="flex flex-col items-center">

            <div
              className="w-16 md:w-30 h-16 md:h-30 rounded-full   flex items-center justify-center"
              style={{
                background: `conic-gradient(#5EF2D6 ${skill.percent}%,  #13254f ${skill.percent}%)`
              }}
            >

              <div className="w-12 md:w-24 h-12 md:h-24 rounded-full bg-[#081528] flex items-center justify-center">

                <span className="text-white text-lg md:text-2xl font-bold">
                  {skill.percent}%
                </span>

              </div>

            </div>

            <h2 className="text-white text-lg mt-5">
              {skill.name}
            </h2>

          </div>

        ))}

      </div>

      <div className="flex justify-center gap-5 mt-12">

        <button
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="border px-2 md:px-5 py-1 md:py-3 rounded disabled:opacity-90 text-white cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <button
          disabled={end >= skills.length}
          onClick={() => setPage(page + 1)}
          className="border px-2 md:px-5 py-1 md:py-3 rounded disabled:opacity-90 text-white cursor-pointer"
        >
          <ChevronRight />
        </button>

      </div>

    </section>
  );
}

export default Skills;