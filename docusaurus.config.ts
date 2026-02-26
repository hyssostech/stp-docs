import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sketch-thru-Plan SDK',
  tagline: 'Natural Language Planning Engine — JavaScript SDK Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://hyssostech.github.io',
  baseUrl: '/stp-docs/',

  organizationName: 'hyssostech',
  projectName: 'stp-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../stp-js/src/index.ts'],
        tsconfig: '../stp-js/tsconfig.json',
        outputFileStrategy: 'members',
        indexFormat: 'table',
        parametersFormat: 'table',
        enumMembersFormat: 'table',
        expandObjects: true,
        disableSources: true,
        readme: 'none',
        sidebar: {
          autoConfiguration: true,
          pretty: true,
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hyssostech/stp-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexBlog: false,
      },
    ],
  ],

  themeConfig: {
    image: 'img/stp-social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Sketch-thru-Plan SDK',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/api/',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://www.npmjs.com/package/sketch-thru-plan-sdk',
          label: 'npm',
          position: 'right',
        },
        {
          href: 'https://github.com/hyssostech/sketch-thru-plan-sdk-js',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'Guides', to: '/docs/category/guides' },
            { label: 'Plugins', to: '/docs/category/plugins' },
            { label: 'API Reference', to: '/docs/api/' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'npm Package', href: 'https://www.npmjs.com/package/sketch-thru-plan-sdk' },
            { label: 'SDK Resources (GitHub)', href: 'https://github.com/hyssostech/sketch-thru-plan-sdk-js' },
            { label: 'MIL-STD-2525D', href: 'https://www.jcs.mil/Portals/36/Documents/Doctrine/Other_Pubs/ms_2525d.pdf' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Hyssos Tech', href: 'https://www.hyssos.com' },
            { label: 'C2SIM Standard', href: 'https://github.com/OpenC2SIM/OpenC2SIM.github.io' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hyssos Tech. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
