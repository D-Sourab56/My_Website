import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-16 pt-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex gap-5">

              {/* Purple Line */}
              <div className="flex flex-col items-center mt-2">
                <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                <div className="w-1 h-40 sm:h-56 bg-gradient-to-b from-[#915EFF] to-transparent" />
              </div>

              {/* Text */}
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-white font-black leading-tight
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl"
                >
                  Hi,
                  <br />
                  I'm <span className="text-[#915EFF]">Indra</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-8 text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed"
                >
                  
                  IT Student in Japan
                </motion.p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={profile}
              alt="Indra"
              className="
                w-64
                h-64
                sm:w-72
                sm:h-72
                md:w-80
                md:h-80
                lg:w-96
                lg:h-96
                rounded-full
                object-cover
                border-[6px]
                border-[#915EFF]
                shadow-[0_0_35px_rgba(145,94,255,0.35)]
                shrink-0
              "
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;