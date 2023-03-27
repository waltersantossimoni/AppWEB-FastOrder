import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
  background: #D73035;
  `;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1216px;

  .page-details {
    h1 {
      font-size: 32px;
      color: #fff;
    }

    h2 {
      margin-top: 6px;
      font-weight: 400;
      font-size: 16px;
      color: #fff;
      opacity: .9;
    }
  }
`;
