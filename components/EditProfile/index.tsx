import * as React from "react";
import styled from 'styled-components';

interface Props {}


const Contents = styled.div`
    display : flex;
    flex-direction : row;
    background-color : #040104;
    width :  644px;
    height : 247px;
    color : white;
`;

const ImgContainer = styled.div`
    flex: 1;
    background-color : #040104;
    display : flex;
    justify-content : center;
    align-items : center;
    position: relative;
    width : 100%;
`;

const Photo = styled.div`
    width : 240px;
    height : 240px;
    background : white;
    background-image: url("https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size : contain;
    border-radius: 50%;
    overflow: hidden;
    /*&:focus { outline:none; }*/
    /*&:hover .modifyImg {
        display : block;
    }*/

    /*&:hover {
        opacity: 0.7;
        .modify-img {
            display: block;
        }

    }*/

`;

const PhotoSelectBtn = styled.button`
    /*display : none;*/
    display : block;
    position: absolute;
    top: 80%;
    left: 50%;

    background: #6865FC;
    border-radius: 0.25rem; 
    padding : 7px 15px;
    color: white;
    text-align: center;

    transform: translate(-50%, -50%);
    cursor : pointer;
    &:focus { outline:none; }
    /*${Photo}:hover & {
        display: block;
    }*/
`;

/*const ImgChangeBtn = styled.input.attrs({ 
    type: 'file',
    value: '사진 수정하기'
  })`
    display : none;
    background: #6865FC;
    border-radius: 4px; 
    width: 112px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FDFDFF;
`;*/

const InfoContainer = styled.div`
    flex: 1;
    /*background-color : #040104;*/
    background-color : white;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : flex-end;
`;

const EmailContainer = styled.div`
    width : 320px;
    height : 32px;
    background : red;
    display : flex;
    flex-direction : row;
`;

const EmailBox = styled.div`
    width : 212px;
    height : 32px;
    background-color : blue;
    /*background-color : #040104;*/
`;

const NickNameContainer = styled.div`
    width : 320px;
    height : 32px;
    background : red;
    display : flex;
    flex-direction : row;
`;

const NickNameBox = styled.div`
    width : 212px;
    height : 32px;
    background-color : blue;
    /*background-color : #040104;*/

    cursor : pointer;
`;

const NickNameInput = styled.input`
    &:focus { outline:none; }
    cursor : pointer;
`;

const PhoneNumberContainer = styled.div`
    width : 320px;
    height : 32px;
    background : red;
    display : flex;
    flex-direction : row;
`;

const PhoneNumberBox = styled.div`
    width : 212px;
    height : 32px;
    background-color : blue;
    /*background-color : #040104;*/

    cursor : pointer;
`;

const PhoneNumberInput = styled.input`
    cursor : pointer;
    &:focus { outline:none; }
    
`;

const Label = styled.label`
    color : #B3B4BE;
    font-size : 0.875rem;
`;

const ModifyBtn = styled.input.attrs({ 
    type: 'submit',
    value: '수정'
  })`
    color : #6865FC;
    font-size ; 0.75rem;
    background-color : #040104;

    cursor : pointer;

    &:focus { outline:none; }
`;
const WithdrawalBtn = styled.button`
    width : 320px;
    height : 32px;
    /*background : red;*/
    background-color : #040104;
    border: 1px solid #B3B4BE;
    box-sizing: border-box;
    border-radius: 0.5rem;
    color: #B3B4BE;
    font-size : 0.75rem;
    cursor : pointer;

    &:focus { outline:none; }
    
`;

const EditProfile = (props: Props) => { 
    const [isNNClicked, setNNClicked] = React.useState<boolean>(false);
    const [isPNClicked, setPNClicked] = React.useState<boolean>(false);

    const [nickName, setNickName] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");

    const onChangeNickName = e => {
        setNickName(e.target.value);
    }

    const onChangePhoneNumber = e => {
        setPhoneNumber(e.target.value);
      };
    return(
        <Contents>
           <ImgContainer>
                <Photo/>
                {/*<ImgChangeBtn className="modifyImg"/>*/}
                <PhotoSelectBtn className="modify-img" onClick={()=>{
                    document.getElementById('imgFileInput').click();
                    }}>
                    사진 수정하기
                </PhotoSelectBtn>
                <input type="file" id="imgFileInput" style={{display:"none"}}/>
           </ImgContainer>
           <InfoContainer>
                <EmailContainer>
                    <Label>이메일</Label>
                    <EmailBox>dffdf</EmailBox>
                </EmailContainer>
                <NickNameContainer>
                    <Label>닉네임</Label>
                    {!isNNClicked ? 
                        (<NickNameBox onClick={()=>setNNClicked(true)}>
                            {nickName}
                        </NickNameBox>)
                        :
                        (<NickNameInput value={nickName} onChange={onChangeNickName}/>)
                    } 
                    <ModifyBtn onClick={()=>setNNClicked(false)}/>
                </NickNameContainer>
                <PhoneNumberContainer>
                    <Label>전화번호</Label>
                    {!isPNClicked ?
                        (<PhoneNumberBox onClick={()=>setPNClicked(true)}>
                            {phoneNumber}
                        </PhoneNumberBox>
                        ):
                        (<PhoneNumberInput value={phoneNumber} onChange={onChangePhoneNumber}/>)
                    }
                    <ModifyBtn onClick={()=>setPNClicked(false)}/>
                </PhoneNumberContainer>
                <WithdrawalBtn>
                    회원탈퇴
                </WithdrawalBtn>
           </InfoContainer>
        </Contents>
        
    );
};

export default EditProfile;