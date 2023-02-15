'use client';

import React, { useEffect } from 'react';

import styled from 'styled-components';

import { StoreModel } from '@/types/models';
import { ProductCard } from '@/components/organisms/ProductCard/ProductCard';

type HomepageProps = {
  data: StoreModel;
};

export const Homepage = ({ data }: HomepageProps) => {
  useEffect(() => console.log('hooks with server components test'), []);

  const { products } = data;

  return (
    <StyledWrapper>
      <div className="product-list">
        {products.map(({ id, title, description, price, images }) => (
          <ProductCard
            key={id}
            title={title}
            description={description}
            price={price}
            images={images}
          />
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.main`
  .product-list {
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
