module.exports = {
  title: 'School Strike 4 Climate',
  tagline: 'Tech and Digital Team',
  url: 'https://schoolstrike4climate.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'schoolstrike4climate', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SS4C Tech and Digital',
      logo: {
        alt: 'SS4C Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/strikeclimate',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/schoolstrikeforclimate',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/strikeclimate',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/schoolstrikeforclimate',
            },
            {
              label: 'Slack',
              href: 'https://ss4c-au.slack.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} School Strike 4 Climate Australia. Built with ❤ in Sydney.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/schoolstrike4climate/docs/tree/master/schoolstrike',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/schoolstrike4climate/docs/tree/master/schoolstrike/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
