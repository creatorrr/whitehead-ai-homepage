export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '60ccc2daa7663625f2f0c924',
                  title: 'Sanity Studio',
                  name: 'whitehead-ai-homepage-studio',
                  apiId: '1ea0e465-e641-4b19-9784-7236059cb6b6'
                },
                {
                  buildHookId: '60ccc2da10070126374c9a10',
                  title: 'Blog Website',
                  name: 'whitehead-ai-homepage',
                  apiId: 'efbb51d6-0b31-41c9-9e5e-eb410cdeccb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/creatorrr/whitehead-ai-homepage',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://whitehead-ai-homepage.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
