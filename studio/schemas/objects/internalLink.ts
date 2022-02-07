import InternalLinkRender from '../../components/IntenalLinkRender';

export default {
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
  description: 'Locate a page you want to link to',
  name: 'internalLink',
  title: 'Internal link to another page',
  to: [{ type: 'page' }],
  type: 'reference',
};
