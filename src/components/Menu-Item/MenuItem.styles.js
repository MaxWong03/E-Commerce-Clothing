import styled from 'styled-components';

const getImageUrl = ({ imageUrl }) => {
  return imageUrl;
}

export const BackgroundImageContainer = styled.div`
  {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${getImageUrl});
  }
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const TitleContainer = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`