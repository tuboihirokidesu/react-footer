import styled from "styled-components";

export const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  margin-left: 60px;
  display: flex;
  flex-direction: column;
  flex-direction: left;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media (maxwidth: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;

  &:hover {
    color: #ff9c00;
    transition: 2--ms ease-in;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  padding-top: 20px;
  margin-bottom: 40px;
  font-weight: bold;
`;
