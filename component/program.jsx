import React from "react";
import styled from "styled-components";

function FilterPanel() {
  return (
    <MainContainer>
      <FilterContainer>
        <HeaderSection>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/f483267b03a473fc25b8921269efbd86b486ff2ab00152e7a6a2c5c6d1e97c9c?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Filter Icon" />
          <Title>Filter By</Title>
        </HeaderSection>
        <FilterOptions>
          <FilterOption>
            <DateTitle>14 Feb 2019</DateTitle>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/23665791df0844d6047f4ca15fbcbb62db460b23ec326160f39bbce4df31a2e6?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Calendar Icon" />
            <OptionTitle>Category</OptionTitle>
            <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b929c2eff657aa2d6091dfe557af12c8b126e80027458aec9c8ab94d90d069e?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Category Icon" />
            <OptionTitle>chapters</OptionTitle>
          </FilterOption>
        </FilterOptions>
        <SearchSection>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a77b8f379e1f7f4dcbc0d8184e52b75e9e956144240c039fda5263b0f540601?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Search Icon" />
          <SearchInput placeholder="Search..." />
        </SearchSection>
        <ResetButton>
          <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f72fae5fe925775392c72474906de20e87729811bf1c5dc67f36b078cad25c2?apiKey=9170b13b4ade437289408c6c891662ab&" alt="Reset Icon" />
          <ButtonTitle>Reset Filter</ButtonTitle>
        </ResetButton>
      </FilterContainer>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #202224;
  font-weight: 700;
  padding: 80px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FilterContainer = styled.section`
  border-radius: 14px;
  border-color: rgba(213, 213, 213, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #f9f9fb;
  display: flex;
  margin-top: 25px;
  width: 100%;
  max-width: 998px;
  justify-content: space-between;
  gap: 20px;
  padding: 0 27px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Title = styled.h2`
  font-family: Nunito Sans, sans-serif;
  margin: auto 0;
`;

const FilterOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  white-space: nowrap;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const DateTitle = styled.div`
  font-family: Nunito Sans, sans-serif;
  align-self: stretch;
  flex-grow: 1;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const OptionTitle = styled.div`
  font-family: Nunito Sans, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const SearchSection = styled.div`
  align-self: start;
  display: flex;
  margin-top: 4px;
  gap: 7px;
  font-size: 15px;
  color: #a0aec0;
  font-weight: 400;
  white-space: nowrap;
  letter-spacing: -0.06px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const SearchInput = styled.input.attrs({
  type: "search",
  role: "searchbox",
})`
  border-radius: 10px;
  border-color: rgba(182, 182, 183, 1);
  border-style: solid;
  border-width: 1px;
  display: flex;
  gap: 9px;
  padding: 18px 17px 6px;
  @media (max-width: 991px) {
    white-space: initial;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const ResetButton = styled.button`
  display: flex;
  gap: 9px;
  color: #ea0234;
  font-weight: 600;
  white-space: nowrap;
  margin: auto 0;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ButtonTitle = styled.p`
  font-family: Nunito Sans, sans-serif;
  flex-grow: 1;
  margin: auto 0;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Icon = styled.img`
  object-fit: cover;
  align-self: center;
`;

export default FilterPanel;