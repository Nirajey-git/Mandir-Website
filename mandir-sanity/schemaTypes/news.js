export default {
  name: 'news',
  title: 'News',
  type: 'document',
fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
 __experimental_actions: ['create', 'update', 'delete', 'publish'],
}
