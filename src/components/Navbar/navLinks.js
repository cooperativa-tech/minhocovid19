import content from "cms/components/navbar.json";

const NAV_LINKS = [
  { key: "homepage", label: content.homepage, href: "/" },
  { key: "about", label: content.about, href: "/about" },
  { key: "faqs", label: content.faqs, href: "/faqs" },
  { key: "transparency", label: content.transparency, href: "/transparency" },
];

export const navLinks = NAV_LINKS;

export const navLinksWithoutHome = NAV_LINKS.filter(
  (link) => link.key !== "homepage"
);
