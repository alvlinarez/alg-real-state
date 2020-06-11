import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import useProperties from '../hooks/useProperties';
import PropertyPreview from './propertyPreview';
import propertiesListCSS from '../css/propertiesList.module.css';

const PropertiesList = () => {
  const res = useProperties();
  const [ properties, setProperties ] = useState([]);

  useEffect(() => {
      setProperties(res);
  }, []);

  return (
    <>
      <h2
        css={css`
          margin-top: 5rem;
        `}
      >
        List
      </h2>
      <ul className={propertiesListCSS.properties}>
        {
          properties.map(property => (
            <PropertyPreview property={property} key={property.id}/>
          ))
        }
      </ul>
    </>
  );
};

export default PropertiesList;
