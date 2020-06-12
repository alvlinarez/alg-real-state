import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import useProperties from '../hooks/useProperties';
import PropertyPreview from './propertyPreview';
import propertiesListCSS from '../css/propertiesList.module.css';
import useFilterProperties from '../hooks/useFilterProperties';

const PropertiesList = () => {
  const res = useProperties();
  const [properties] = useState(res);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const { category, FilterUI } = useFilterProperties();

  useEffect(() => {
    if (category) {
      const filter = properties.filter(
        (property) => property.category.name === category
      );
      setFilteredProperties(filter);
    } else {
      setFilteredProperties(properties);
    }
  }, [category, properties]);

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        Our Properties
      </h2>
      {FilterUI()}
      <ul className={propertiesListCSS.properties}>
        {filteredProperties.map((property) => (
          <PropertyPreview property={property} key={property.id} />
        ))}
      </ul>
    </>
  );
};

export default PropertiesList;
