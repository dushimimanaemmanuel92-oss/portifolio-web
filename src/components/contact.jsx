import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

function Contact() {
  const contacts = [
    {
      icon: <FaTwitter size={30} />,
      title: "Twitter",
      text: "Get in touch",
      link: "https://x.com/hom",
    },
    {
      icon: <FaGithub size={30} />,
      title: "GitHub",
      text: "Collaborate with me",
      link: "https://github.com/dushimimanaemmanuel92-oss",
    },
    {
      icon: <FaLinkedin size={30} />,
      title: "LinkedIn",
      text: "Connect on social media",
      link: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <FaInstagram size={30} />,
      title: "Instagram",
      text: "Follow my journey",
      link: "https://www.instagram.com/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#2c0349] text-white py-20 px-6 "
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-bold">Let's Connect</h1>

        <p className="text-gray-300 mt-2 md:mt-8 text-lg md:text-xl">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out!
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-12 mt-6 md:mt-20 ">

        {contacts.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="border border-cyan-400 rounded-xl p-2 md:p-8 flex items-center gap-4 md:gap-8
            hover:bg-[#16294f]
            hover:scale-105
            transition-all
            duration-300"
          >
            <div className="text-gray-300">{item.icon}</div>

            <div>
              <h2 className="text-lg md:text-3xl font-semibold">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm  md:text-xl mt-2">
                {item.text}
              </p>
            </div>
          </a>
        ))}

      </div>
    </section>
  );
}

export default Contact;