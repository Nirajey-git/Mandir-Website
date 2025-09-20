export default {
  name: 'activities',
  title: 'Activities',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Activity Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.max(6) 
    }
  ],
  __experimental_actions: ['update', 'publish'],
}
