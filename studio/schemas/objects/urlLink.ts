import UrlLinkRender from '../../components/UrlLinkRender';

export default {
  blockEditor: {
    icon: () => '🌍',
    render: UrlLinkRender,
  },
  options: { collapsible: false },
  fields: [
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    },
  ],
  name: 'urlLink',
  title: 'URL Link',
  type: 'object',
};
