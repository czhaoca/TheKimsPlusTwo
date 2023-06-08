import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
import { images } from '../../data/data';
import Image from './Image';

function ImageCarousel(props) {
  const { property } = props;
  const id = '5500-Grand-Lake-Dr,-San-Antonio,-TX-78244';
  const propertyImages = images.find(({ pid }) => pid === id).images;
  return (
    <Wrapper>
      <Section>
        {propertyImages ? (
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            />
            <Carousel>
              {propertyImages.map((image, index) => (
                <Image key={index} image={image} />
              ))}
            </Carousel>
          </Box>
        ) : (
          <ImageEmpty />
        )}
      </Section>
    </Wrapper>
  );
}

export default ImageCarousel;

const Wrapper = styled.div`
  margin: 30px;
  width: 100vw;
  hight: 100vh;
`;

const Section = styled.section``;

const ImageEmpty = styled.div``;