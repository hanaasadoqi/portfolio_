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
  FaReact,
  FaGitAlt,
  FaDocker,
  FaClipboardCheck,
  FaServer,
  FaHtml5,
  FaSearch,
  FaExternalLinkAlt,
  FaPlus,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa'
import { FaHashnode } from 'react-icons/fa6'
import { IoMdLink, IoMdClose } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiRubyonrails,
  SiPostgresql,
  SiGraphql,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiJest,
  SiWebpack,
  SiNodedotjs,
} from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import sirius from '/public/logos/siriusxm.svg'
import flatiron from '/public/logos/flatiron-light.svg'
// import stitchfix from "/public/logos/stitchfix.svg";
import ventrop from '/public/logos/ventrop.svg'
import benvenuti from '/public/logos/benvenuti.svg'
import wework from '/public/logos/wework.svg'

const icons = {
  Github: FaGithub,
  LinkedIn: FaLinkedin,
  Dev: FaDev,
  StackOverflow: FaStackOverflow,
  Hashnode: FaHashnode,
  Medium: FaMedium,
  Settings: FaCog,
  Email: FaEnvelope,
  Connect: IoMdLink,
  Loading: FaSpinner,
  Check: FaCheck,
  Moon: FaMoon,
  Sun: FaSun,
  Hamburger: GiHamburgerMenu,
  Javascript: SiJavascript,
  React: FaReact,
  Typescript: SiTypescript,
  Redux: SiRedux,
  Rubyonrails: SiRubyonrails,
  Postgresql: SiPostgresql,
  Graphql: SiGraphql,
  Html5: FaHtml5,
  Tailwindcss: SiTailwindcss,
  GitAlt: FaGitAlt,
  Docker: FaDocker,
  NextJs: SiNextdotjs,
  NodeJs: SiNodedotjs,
  Express: SiExpress,
  Mysql: SiMysql,
  Jest: SiJest,
  Server: FaServer,
  ClipboardCheck: FaClipboardCheck,
  Webpack: SiWebpack,
  search: FaSearch,
  externalLink: FaExternalLinkAlt,
  close: IoMdClose,
  plus: FaPlus,
  arrowUp: FaChevronUp,
  arrowDown: FaChevronDown,
}

const logos = {
  sirius,
  ventrop,
  flatiron,
  // stitchfix,
  benvenuti,
  wework,
}

export default icons

export { icons as IconLibrary, logos as LogoLibrary }
