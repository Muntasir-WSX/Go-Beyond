import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

// ইমেজ ইম্পোর্ট
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";
import man3 from "../../assets/man3.jpg";

const teamMembers = [
  {
    name: "Muntasir Mahmud",
    role: "Chief Executive Officer",
    image: man3,
    social: {
      facebook: "https://www.facebook.com/muntasir.mahmud.9843",
      instagram: "https://www.instagram.com/muntasir_wsx/",
      linkedin: "https://www.linkedin.com/in/muntasir-mahmud-aa4291278/",
    },
  },
  {
    name: "Tanjim Ahmed",
    role: "Head of Operations",
    image: man2,
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/muntasir-mahmud-aa4291278/",
    },
  },
  {
    name: "Affnan Sawad",
    role: " Lead Travel Consultant",
    image: man1,
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://www.linkedin.com/in/muntasir-mahmud-aa4291278/",
    },
  },
];

const TeamUs = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#ff5e37] font-bold italic text-lg lg:text-xl block"
            style={{ fontFamily: "cursive" }}
          >
            Dedicated Professionals
          </motion.span>
          <h2 className="text-3xl lg:text-5xl font-black text-[#1a1b2e] leading-tight tracking-tighter uppercase mt-2">
            Meet Our <span className="text-[#ff5e37]">Expert</span> Team
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4">
            Our passionate team of travel enthusiasts and local experts are here
            to ensure your journey is smooth, memorable, and truly beyond
            expectations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(30%-1rem)] bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#ff5e37]/90 to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#1a1b2e] transition-colors bg-white/20 p-2 rounded-full backdrop-blur-sm"
                      >
                        <Facebook size={18} />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#1a1b2e] transition-colors bg-white/20 p-2 rounded-full backdrop-blur-sm"
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#1a1b2e] transition-colors bg-white/20 p-2 rounded-full backdrop-blur-sm"
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center border-t border-gray-50">
                <h3 className="text-xl font-black text-[#1a1b2e] mb-1 leading-tight tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-bold text-[#ff5e37] uppercase tracking-[0.2em]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamUs;
