import {
  FaFolder,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

function Projects() {
  const projects = [
    {
      title: "My Portfolio",
      description:
  " A personal website showcasing all my projects, skills, and experiences. Visitors can explore work samples, view project details, and get in touch using the integrated contact section.",
      tech: [ "ReactJs", "TailwindCss", "Javascript "],
      link: "#",
    },

    {
      title: "Ecommerce Store",
      description:
        "Users can order the products,and make payments, and securely complete purchases. Admins can add products, remove and update products and manage inventory through a user-friendly dashboard and visual interface.",
      tech: ["PHP","HTML", "CSS","TailwindCss", "MYSQL "],
      link: "#",
    },

    {
      title: "Stock Magement System",
      description:
        "A dynamic system where Manager has privilege to manager invertory or stock adding product, Update and remove product if not stored in stock others has know a level of stock like products and manager Capital especially all events happening the ystem management has to do without confused.",
      tech: ["NextJs", "TailwindCss", "Strapi CMS"],
      link: "#",
    },
        {
      title: "Posts Website",
      description:
        "A dynamic website where people to look different posts all categories even if you are baby, Genuises, Family and Old people that is purpose of our website but we have other services such as taking pictures, video, make audio songs and publishing different events.",
      tech: ["ReactJs", "TailwindCss", "Javascript ","PHP","MSQL"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#1b1430] via-[#24193e] to-[#100d18] py-20 px-6"
    >
      {/* Heading */}

      <div className="flex items-center gap-4 mb-14">

        <h1 className="text-lg md:text-5xl font-bold text-yellow-300">
          <span className="text-cyan-400 text-2xl">#</span > Project Archives
        </h1>

        <div className="flex-1 h-[1px] bg-gray-600"></div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2  gap-8 mx-12">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-[#12254a] rounded-2xl p-8 hover:-translate-y-3 transition-all duration-300"
          >
            {/* Top */}

            <div className="flex justify-between items-center">

              <FaFolder className="text-cyan-400 text-xl md:text-4xl" />

              <a href={project.link}>
                <FaArrowUpRightFromSquare className="text-gray-300 text-xl md:text-3xl hover:text-cyan-400" />
              </a>

            </div>

            {/* Title */}

            <h2 className="text-white text-xl md:text-4xl font-semibold mt-1">
              {project.title}
            </h2>

            {/* Description */}

            <p className="text-gray-400 text-lg md:text-2xl mt-5 leading-10">
              {project.description}
            </p>

            {/* Technologies */}

            <div className="flex flex-wrap gap-3 mt-4 md:mt-8">

              {project.tech.map((item, i) => (

                <span
                  key={i}
                  className="bg-cyan-900 text-cyan-300  px-2 md:px-4 py-1 md:py-2 rounded-lg text-sm md:text-lg font-semibold"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Projects;