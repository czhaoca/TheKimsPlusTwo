import React, { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareProps from '../../components/Compare/CompareProps';
import ImageCarousel from '../../components/Property/ImageCarousel';
import { getPropertyAsync } from '../../redux/property/thunks';

// function Compare() {
//   const navigate = useNavigate();
//   const location = useLocation();

function Compare() {
  const params = new URL(document.location).searchParams;
  const zpid = params.get('item');
  // const zpid2 = params.get('zpid2');
  const property = useSelector(state => state.property.property);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyAsync(zpid));
    // dispatch(getPropertyAsync(zpid2));
  }, [dispatch]);

  const images = Array.isArray(property.imgSrc)
    ? property.imgSrc
    : [property.imgSrc];

  return (
    <Wrapper>
      <Margin>
        <Main>
          <Header> Compare properties</Header>
          <ContentWrapper>
            <Grid container spacing={2}>
              <Grid item="true" xs={4}>
                <ImageCarousel propertyImages={images} />
                <CompareProps propertyDetails={property} />
              </Grid>

              <Grid item="true" xs={4}>
                <ImageCarousel propertyImages={images} />
                <CompareProps propertyDetails={property} />
              </Grid>
            </Grid>
          </ContentWrapper>
        </Main>
      </Margin>
    </Wrapper>
  );
}
const Main = styled.div`
  padding-top: 5em;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const ContentWrapper = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  margin: 0;
  margin-top: 2rem;
`;
const Wrapper = styled.div`
  padding-top: 6em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-item: space-around;
`;
const Margin = styled.div`
  margin: 20px;
  font-family: arial, sans-serif;
  line-height: 30pt;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 2rem;
  text-align: left;
  margin-top: -4rem;
  margin-left: 1rem;
`;

export default Compare;
