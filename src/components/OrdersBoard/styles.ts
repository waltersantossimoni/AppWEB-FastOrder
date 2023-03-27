import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  padding: 16px;

  > header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    font-size: 14px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    height: 128px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    border-radius: 8px;
    background: #fff;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
`;
