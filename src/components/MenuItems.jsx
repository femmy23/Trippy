import { FaAddressBook, FaBriefcase, FaHome, FaUser } from "react-icons/fa";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    type: "nav-links",
    icon: <FaHome />,
  },
  {
    title: "About",
    url: "/about",
    type: "nav-links",
    icon: <FaUser />,
  },
  {
    title: "Service",
    url: "/service",
    type: "nav-links",
    icon: <FaBriefcase />,
  },

  {
    title: "Contact",
    url: "/contact",
    type: "nav-links",
    icon: <FaAddressBook />,
  },
  {
    title: "Sign Up",
    url: "/",
    type: "button",
  },
];
