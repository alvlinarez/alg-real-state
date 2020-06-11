import { graphql, useStaticQuery } from 'gatsby';

const useIndex = () => {
  const res = useStaticQuery(graphql`
    query {
      allStrapiPages(filter: { name: { eq: "Home" } }) {
        nodes {
          id
          name
          content
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 1500 duotone: {
                highlight: "#222222", shadow: "#192550", opacity: 30 
              }) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return res.allStrapiPages.nodes.map(
    index => ({
      name: index.name,
      content: index.content,
      image: index.image
    })
  );
};

export default useIndex;
