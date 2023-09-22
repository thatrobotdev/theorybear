/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  theory: [
    'introduction',
    {
      type: 'category',
      label: 'Puma Pride Honors Choir',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: "Alfred's Essentials of Music Theory: Book 1",
          link: {
            type: 'generated-index'
          },
          items: [
            {
              type: 'category',
              label: 'Unit 1',
              link: {type: 'doc', id: 'puma-pride/book-1/unit-1/unit-1'},
              items: [
                'puma-pride/book-1/unit-1/lesson-1',
                'puma-pride/book-1/unit-1/lesson-2',
                'puma-pride/book-1/unit-1/lesson-3',
                'puma-pride/book-1/unit-1/lesson-4',
                'puma-pride/book-1/unit-1/lesson-5',
              ]
            },
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Concert Choir',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Unit 1',
          // link: {type: 'doc', id: 'concert-choir/book-1/unit-1'},
          items: [
            'concert-choir/book-1/unit-1/A',
            'concert-choir/book-1/unit-1/B',
            'concert-choir/book-1/unit-1/C',
            'concert-choir/book-1/unit-1/D',
          ]
        },
      ],
    },
    'singing-tips',
    'additional-resources'
  ],
};

module.exports = sidebars;
