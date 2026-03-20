import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Francesco Taioli - PhD in Artificial Intelligence",
  description:
    "Francesco Taioli is a PhD in Artificial Intelligence at Polytechnic of Turin, specializing in Deep Learning, Foundation Models (VLMs, LLMs, VLAs), and Embodied AI for autonomous intelligent agents, navigation, and human-robot interaction.",
  href: "https://francescotaioli.github.io",
  author: "Francesco Taioli",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  news: {
    path: "/#news",
    label: "News",
  },
  education: {
    path: "/#education",
    label: "Education & Work",
  },
  publications: {
    path: "/#publications",
    label: "Publications",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:francesco.taioli@polito.it",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/francescotaioli",
  },
  scholar: {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=XxeU3kAAAAAJ&hl=it",
  },
};
