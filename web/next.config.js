// require('ts-node').register(require('./tsconfig.json'));

const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();

// module.exports = withNextPluginPreval(require('./config/next.ts'));
module.exports = withNextPluginPreval({
  images: {
    domains: ['cdn.sanity.io'],
  },
});
