import {
  FaLinkedin,
  FaGithub,
  FaDev,
  FaStackOverflow,
  FaMedium,
  FaCog,
  FaEnvelope,
  FaSpinner,
  FaCheck,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const icons = {
  github: FaGithub,
  linkedIn: FaLinkedin,
  dev: FaDev,
  stackOverflow: FaStackOverflow,
  hashnode: FaHashnode,
  medium: FaMedium,
  settings: FaCog,
  email: FaEnvelope,
  connect: IoMdLink,
  loading: FaSpinner,
  check: FaCheck,
  moon: FaMoon,
  sun: FaSun,
  hamburger: GiHamburgerMenu,
};

export { icons as IconLibrary };
