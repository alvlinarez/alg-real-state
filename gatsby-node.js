const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query {
      allStrapiProperties {
        nodes {
          name
          id
        }
      }
    }
  `);
  if(res.errors) {
    reporter.panic('No results', res.errors);
  }
  const properties = res.data.allStrapiProperties.nodes;
  properties.forEach(
    property => {
      actions.createPage({
        path: urlSlug(property.name),
        component: require.resolve('./src/components/properties.js'),
        context: {
          id: property.id
        }
      });
    }
  );
};
