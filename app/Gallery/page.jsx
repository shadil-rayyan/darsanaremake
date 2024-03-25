'use client'
import React from "react";
import styled from "styled-components";

const GalleryPage = () => {
  const imageData = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c14087586fc485a256d571e4b9a931da8c935a97d17ead246750e511a9867de",
      aspectRatio: "1.75"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/70d16dfa8a9bfe2eb69f5c564364d8fce11da0b617e072a4f135804b5050718f",
      aspectRatio: "1.33"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/100fbc7a609d0c2b50f7ca17ab8201be1fd8f32314689fe3a82e52adf42d1a69",
      aspectRatio: "1.45"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2735669b0cb47a772c6787349f686a7aabc5bdd7981e31716507f101e7c6dd69",
      aspectRatio: "1.79"
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ddd7b0a64c15bb3dc4d09d92ef45c2c588530d6b6a5ca4ba5a19eea93f8aacb",
      aspectRatio: "2"
    },
    {
      id: 6,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea96b11c281e24e71de65ab1f030690ea583dfd85fa7feef6c554dd3cae8e92a",
      aspectRatio: "1.49"
    },
    {
      id: 7,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f57fb82d3deb0c0c5b9455e422ed0d0b1189b6ece9d97fcdba03c7a43fd14f1f",
      aspectRatio: "1"
    },
    {
      id: 8,
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ac8b5f9692dee1a8276922d341f3fc3213c14116d627dfb12fa3504820d6139",
      aspectRatio: "2"
    }
  ];

    return (
      <Main>
        <Header>Gallery</Header>
        <ImageSection>
          {imageData.map((image, index) => (
            <ImageWrapper key={image.id} order={index % 4 + 1}>
              <Image src={image.src} alt={`Image ${index + 1}`} loading="lazy" />
            </ImageWrapper>
          ))}
        </ImageSection>
      </Main>
    );
  };
  
  const Main = styled.main`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 80px 53px 29px;
  
    @media (max-width: 991px) {
      padding: 0 20px;
    }
  `;
  
  const Header = styled.header`
    color: var(--Black, #000);
    text-align: center;
    align-self: center;
    margin-top: 47px;
    font: 700 48px/120% Roboto, sans-serif;
  
    @media (max-width: 991px) {
      margin-top: 40px;
      font-size: 40px;
    }
  `;
  
  const ImageSection = styled.section`
    margin-top: 182px;
    padding-bottom: 76px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  
    @media (max-width: 991px) {
      margin-top: 40px;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
  `;
  
  const ImageWrapper = styled.div`
    flex-basis: calc(25% - 20px);
    display: flex;
    flex-direction: column;
    line-height: normal;
  
    @media (max-width: 991px) {
      flex-basis: 100%;
    }
  `;
  
  const Image = styled.img`
    width: 100%;
    aspect-ratio: ${({ aspectRatio }) => aspectRatio || 'auto'};
    object-fit: cover;
  
    @media (max-width: 991px) {
      margin-top: 32px;
    }
  `;
  
  export default GalleryPage;