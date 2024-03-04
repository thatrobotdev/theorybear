// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "theorybear",
  tagline: "A fun, supplemental guide to music theory education.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://theorybear.jameskerrane.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/theorybear/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "thatrobotdev", // Usually your GitHub org/user name.
  projectName: "theorybear", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["my-loaders"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/thatrobotdev/theorybear/tree/main/",
        },
        blog: {
          blogTitle: "theorybear blog!",
          blogDescription:
            "theorybear's blog about music theory, music opportunities, and more!",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "theorybear",
        logo: {
          alt: "theorybear logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "theory",
            position: "left",
            label: "Theory",
          },
          {
            to: "blog",
            label: "Blog",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "howToContribute",
            position: "left",
            label: "How To Contribute",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction",
              },
              {
                label: "Alfred's Essentials of Music Theory",
                to: "/docs/category/alfreds-essentials-of-music-theory",
              },
              {
                label: "Concert Choir",
                to: "/docs/concert-choir",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "musictheory.net",
                href: "https://www.musictheory.net/",
              },
              {
                label: "Open Music Theory",
                href: "https://viva.pressbooks.pub/openmusictheory/",
              },
              {
                label: "Sight Reading Factory",
                href: "https://www.sightreadingfactory.com/",
              },
              {
                label: "Additional Resources",
                to: "/docs/additional-resources",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/thatrobotdev/theorybear",
              },
            ],
          },
        ],
        copyright: `Made with 🤎 and 🐻🐻‍❄️🧸🐨🐼 by <a href="https://www.jameskerrane.com">JP Kerrane</a>. <a href="https://github.com/thatrobotdev/theorybear">Open source</a> and licensed under the MIT License.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
