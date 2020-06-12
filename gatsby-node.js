const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    query {
    allStrapiPages {
      nodes {
        name
        id
      }
    }
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
  const pages = res.data.allStrapiPages.nodes;
  const properties = res.data.allStrapiProperties.nodes;

  pages.forEach(
    page => {
      actions.createPage({
        path: urlSlug(page.name),
        component: require.resolve('./src/components/pages.js'),
        context: {
          id: page.id
        }
      });
    }
  );

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
