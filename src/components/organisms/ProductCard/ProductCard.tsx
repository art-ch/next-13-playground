import styled from 'styled-components';

import Image from 'next/image';

import { Product } from '@/types/models';

export type ProductCardProps = Pick<
  Product,
  'title' | 'description' | 'price' | 'images'
>;

export const ProductCard = ({
  title,
  description,
  price,
  images
}: ProductCardProps) => {
  return (
    <StyledWrapper>
      <div className="image-container">
        <Image
          src={images[0]}
          alt="product"
          width={1920}
          height={1080}
          className="image"
        />
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * {
    margin: 0;
  }
  .image-container {
    width: 100%;
    height: 70%;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
