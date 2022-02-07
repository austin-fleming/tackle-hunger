export default {
  widgets: [
    { name: 'structure-menu' },
    {
      layout: { width: 'auto', height: 'auto' },
      name: 'document-list',
      options: {
        limit: 10,
        order: '_updatedAt desc',
        title: 'Recently Edited Pages',
        types: ['page'],
      },
    },
    {
      layout: { width: 'auto', height: 'auto' },
      name: 'document-list',
      options: {
        limit: 10,
        order: '_updatedAt desc',
        title: 'Recently Edited Other',
        types: ['teamMember', 'sponsor', 'city'],
      },
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            category: 'Code',
            title: 'GitHub repo',
            value: 'https://github.com/TackleHunger/sanity-marketing-tacklehunger.org',
          },
          {
            category: 'apps',
            title: 'Frontend',
            value: 'https://tacklehunger.org',
          },
        ],
      },
      layout: { width: 'medium', height: 'auto' },
    },
    { layout: { height: 'auto', width: 'auto' }, name: 'project-users' },
  ],
};
