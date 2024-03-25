import * as React from "react";
import styled from "styled-components";

function MyComponent() {
  const handleFilterClick = () => {
    console.log("Filter clicked");
  };

  const handleResetFilterClick = () => {
    console.log("Reset Filter clicked");
  };

  const handleSearchClick = () => {
    console.log("Search clicked");
  };

  return (
    <Div>
      <Div2>
        <Div3>
          <Button onClick={handleFilterClick}>
            <Img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f483267b03a473fc25b8921269efbd86b486ff2ab00152e7a6a2c5c6d1e97c9c?apiKey=9170b13b4ade437289408c6c891662ab&"
            />
            <Div5>Filter By</Div5>
          </Button>
          <Div6>
            <Div7>14 Feb 2019</Div7>
            <Img2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23665791df0844d6047f4ca15fbcbb62db460b23ec326160f39bbce4df31a2e6?apiKey=9170b13b4ade437289408c6c891662ab&"
            />
            <Div8>Category</Div8>
            <Img3
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b929c2eff657aa2d6091dfe557af12c8b126e80027458aec9c8ab94d90d069e?apiKey=9170b13b4ade437289408c6c891662ab&"
            />
            <Div9>Chapters</Div9>
          </Div6>
          <Div10>
            <Img4
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb1ff252a44c18af2ddac6ae7bea2d7a53f46a100d924cb5cae6422fa329affd?apiKey=9170b13b4ade437289408c6c891662ab&"
            />
            <Button onClick={handleSearchClick}>
              <Img5
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/80a8f8fa42cf6ae9dd24fa7effedcadd71bac901391825a16f24645a871b285f?apiKey=9170b13b4ade437289408c6c891662ab&"
              />
              <Div12>Search...</Div12>
            </Button>
          </Div10>
          <Button onClick={handleResetFilterClick}>
            <Img6
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86b843b65e61b0bf5996fd2efff4dd995cc96ca56d2e0d6db6752653a30de4a3?apiKey=9170b13b4ade437289408c6c891662ab&"
            />
            <Div14>Reset Filter</Div14>
          </Button>
        </Div3>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div2 = styled.div`
  display: flex;
  margin-top: 42px;
  width: 100%;
  max-width: 1218px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div3 = styled.div`
  border-radius: 14px;
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #f9f9fb;
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 998px;
  justify-content: space-between;
  gap: 20px;
  font-size: 14px;
  color: #202224;
  font-weight: 700;
  padding: 0 27px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  aspect-ratio: 0.68;
  object-fit: auto;
  object-position: center;
  width: 48px;
`;

const Div5 = styled.div`
  font-family: Nunito Sans, sans-serif;
  margin: auto 0;
`;

const Div6 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div7 = styled.div`
  font-family: Nunito Sans, sans-serif;
  margin: auto 0;
`;

const Img2 = styled.img`
  aspect-ratio: 1.09;
  object-fit: auto;
  object-position: center;
  width: 26px;
`;

const Div8 = styled.div`
  font-family: Nunito Sans, sans-serif;
  margin: auto 0;
`;

const Img3 = styled.img`
  aspect-ratio: 1.04;
  object-fit: auto;
  object-position: center;
  width: 25px;
`;

const Div9 = styled.div`
  font-family: Nunito Sans, sans-serif;
  margin: auto 0;
`;

const Div10 = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 15px;
  color: #a0aec0;
  font-weight: 400;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Img4 = styled.img`
  aspect-ratio: 1.09;
  object-fit: auto;
  object-position: center;
  width: 26px;
`;

const Img5 = styled.img`
  aspect-ratio: 0.95;
  object-fit: auto;
  object-position: center;
  width: 21px;
`;

const Div12 = styled.div`
  font-family: Roboto, sans-serif;
`;

const Img6 = styled.img`
  aspect-ratio: 1.05;
  object-fit: auto;
  object-position: center;
  width: 19px;
`;

const Div14 = styled.div`
  font-family: Nunito Sans, sans-serif;
  margin: auto 0;
`;