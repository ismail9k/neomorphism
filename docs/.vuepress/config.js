module.exports = {
  title: 'Neomorphism',
  description: 'UI components library in the new neomorphism design style',
  base: '/neomorphism/',
  serviceWorker: true,
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'theme-color', content: '#2451F2' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    ['meta', { property: 'og:image', content: '/neomorphism/neomorphism.svg' }],
  ],
  themeConfig: {
    repo: 'ismail9k/neomorphism',
    docsRepo: 'ismail9k/neomorphism',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Help us improve this page!',
        nav: [{ text: 'Getting started', link: '/introduction' }],
        sidebar: [
          {
            title: 'Getting Started',
            collapsable: false,
            sidebarDepth: 2,
            children: ['/introduction', '/structure-concepts'],
          },
          {
            title: 'Components',
            collapsable: false,
            sidebarDepth: 1,
            children: getComponents(),
          },
        ],
      },
    },
  },
};

console.log(getComponents());
function getComponents() {
  return [
    'alert',
    'avatar',
    'button',
    'buttons',
    'checkbox',
    'dropdown',
    'form',
    'icon',
    'input',
    'label',
    'modal',
    'navbar',
    'pagination',
    'progress',
    'radio',
    'switcher',
    'table',
    'textarea',
  ]
    .sort()
    .map(comp => `/components/${comp}`);
}
