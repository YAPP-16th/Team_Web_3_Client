import * as React from "react";
import styled from "styled-components";

interface Props {
  guides: { type: string; content: string; price: number }[];
}
const Container = styled.ul`
  color: #e2e1e2;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const Card = styled.li`
  padding: 1.5rem;
  display: flex;
  margin: 0;
  flex-direction: column;
  background: #181818;
  border-radius: 8px;
`;
const Divide = styled.div`
  border-bottom: solid #3e3e41 0.74px;
  border-radius: 0.741935px;
  height: 5px;
  align-self: stretch;
`;
const Type = styled.div`
  color: #e2e1e2;
  font-size: 0.875rem;
`;
const Content = styled.div`
  max-width: 10rem;
  font-size: 0.75rem;
  color: #b3b4be;
  margin: 0.4rem 0;
`;
const Price = styled.div`
  margin: 1.5rem 0;
  color: #b3b4be;
  font-size: 0.75rem;
`;
const toWon = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
};
const PriceGuide = ({ guides }: Props) => {
  return (
    <Container>
      {guides.map((guide) => (
        <Card>
          <Type>{guide.type}</Type>
          <Divide></Divide>
          <Content>{guide.content}</Content>
          <Price>{toWon(guide.price)}</Price>
        </Card>
      ))}
    </Container>
  );
};

export default PriceGuide;
