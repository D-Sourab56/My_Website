import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("home");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-28 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-white font-bold text-xl">
              Indra
            </h1>

            <p className="text-secondary text-xs">
              Web Developer
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`relative font-medium text-[17px] transition-all duration-300 hover:text-white ${
                  active === nav.id
                    ? "text-white"
                    : "text-secondary"
                }`}
              >
                {nav.title}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[#915EFF] transition-all duration-300 ${
                    active === nav.id
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-20 right-4 min-w-[180px] rounded-2xl bg-[#151030] p-6 shadow-xl`}
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => setToggle(false)}
                    className={`transition duration-300 ${
                      active === nav.id
                        ? "text-white"
                        : "text-secondary"
                    } hover:text-white`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;