export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec7c58ffbfdbe33dac0f98d',
                  title: 'Sanity Studio',
                  name: 'mumble-sanity-gatsby-blog-studio',
                  apiId: '64e90676-0625-4ef3-bdaa-699de736a933'
                },
                {
                  buildHookId: '5ec7c58f8203aaf43562ef8f',
                  title: 'Blog Website',
                  name: 'mumble-sanity-gatsby-blog',
                  apiId: 'a38a8219-c4de-4cb4-9a5f-bdda20ac927c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/palmop/mumble-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mumble-sanity-gatsby-blog.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
