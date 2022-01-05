import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #d6e7f8;
  position: relative;
  padding: 80px 60px;
  z-index: 150;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-colums: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterTitle = styled.p`
  font-size: 24px;
  color: #5f74ac;
  margin-bottom: 40px;
`;

export const FooterLink = styled(Link)`
  color: #5f74ac;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
`;
