import { graphql, useStaticQuery } from 'gatsby';

const useProperties = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProperties {
        nodes {
          name
          description
          id
          wc
          price
          parking
          rooms
          category {
            name
          }
          agent {
            name
            phone
            email
          }
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return data.allStrapiProperties.nodes.map(
    property => ({
      name: property.name,
      description: property.description,
      image: property.image,
      id: property.id,
      wc: property.wc,
      parking: property.parking,
      rooms: property.rooms,
      agent: property.agent,
      price: property.price,
      category: property.category
    })
  );
};

export default useProperties;
