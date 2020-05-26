import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header"
import EditProfile from '../../components/EditProfile';
import Footer from '../../components/Footer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #040104;
  justify-content : center;
  align-items : center;
  /*background: white;*/
  max-width : 1920px;
  min-width : 765px;
  /*@media only screen and (max-width: 765px) {
    width : 765px;
  }*/

`;

const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  /*background : grey;*/
  color: #ffffff;
  padding : 80px 400px 48px 0px;
  min-width : 765px;
`;

const Profile: React.FC = () => {
  return (
    <>
        <Header/>
        <MainContainer>
          <Title>프로필 편집</Title>
          <EditProfile/>
        </MainContainer>
        <Footer/>
    </>
  );
};

export default Profile;