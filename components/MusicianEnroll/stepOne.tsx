import * as React from "react";
import styled from "styled-components";
import OneThird from "../ProgressBar/oneThird";
import Enroll from "../../pages/musician/enroll";
const StepOneContainer = styled.div`
  width : 100%;
  background: #040104;
  padding-bottom : 10%;
`;

const StepOneTitle = styled.div`
  font-size : 1rem;
  color: #6865FC;
`;

const StepOneNeeds = styled.div`
  font-size : 0.75rem;
  color: #B3B4BE;
  float : right;
  padding-bottom : 1%;
  padding-top : 3%;
`;

const FormContainer = styled.div`
  clear : both;
  padding-top : 3%;
  padding-bottom : 6%;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  border-radius: 0.741935px;
`;

const FormContainerTitle = styled.div`
  color : #B3B4BE;
  float : left;
  font-size : 1rem;
  font-weight : bold;
  padding-top : 0.5%;
  
`;

const FormContainerInput = styled.input`
  float : right;
  width : 70%;
  color : #B3B4BE;
  background: #121212;
  border-radius: 8px;
  border : none;
  height: 32px;
  padding : 0 1.5%;
  &&{
    ::placeholder {
      color : rgba(179, 180, 190, 0.5);
      font-size : 0.75rem;
    }
  }
  &:focus {
    outline : none;
  }
`;

const FormContainerTextarea = styled.textarea`
  float : right;
  width : 70%;
  color : #B3B4BE;
  background: #121212;
  border-radius: 8px;
  padding : 1.5%;
  border : none;
  line-height : 20px;
  &&{
    ::placeholder {
      color : rgba(179, 180, 190, 0.5);
      font-size : 0.75rem;
    }
  }
  &:focus {
    outline : none;
  }
`;
const MusicNameLayout = styled.div`
  float : right;
  width : 70%;
  color : rgba(179, 180, 190, 0.5);
  font-size : 0.75rem;
  background: #121212;
  border-radius: 8px;
  border : none;
  height: 32px;
  padding : 0 1.5%;
`;
const FormContainerProfile = styled.div`
  float : right;
  width : 73%;
  position : relative;
  top : -1vh;
`;

const FormContainerProfileUpload = styled.button`
  background : #3E3E41;
  color : #B3B4BE;
  width : 56px;
  height : 32px;
  font-size : 0.75rem;
  font-weight : bold;
  border : none;
  border-radius: 6px;
  margin-bottom : 1.5%;

`;

const FormContainerProfileContent = styled.div`
  color : #6865FC;
  font-size : 0.75rem;
`;

const FormContainerInputTitle = styled.div`
  float : right;
  width : 73%;
  color : #B3B4BE;
  height: 32px;
  font-weight : bold;
  font-size : 0.875rem;
`;

const FormContainerInputDescription = styled.div`
  float : right;
  width : 73%;
  color : #B3B4BE;
  height: 32px;
  font-size : 0.75rem;
`;

const FormContainerFixLayout = styled.div`
  float : right;
  width : 30%;
  line-height : 32px;
`;

const FormContainerFixButton = styled.span`
  vertical-align : middle;
  cursor : pointer;
  color : #6865FC;
  font-size : 0.75rem;
  font-weight : bold;
  background-color : #040104;
  padding : 3%;
`;

const FormContainerAddURL = styled.div`
  float: right;
  margin-bottom : 2%;
  width: 73%;
`;

const FormContainerAddURLButton = styled.button`
  border-radius: 8px;
  border: 1px solid #FFFFFF;
  background: #040104;
  color: #B3B4BE;
  height: 32px;
  width: 144px;
  cursor : pointer;
`;

const FormContainerSnsLayout = styled.div`
  width: 70%;
  line-height: 32px;
  clear: both;
`;

const FormContainerSnsName = styled.div`
  float : right;
  width : 12%;
  height : 32px;
  vertical-align : middle;
  color : #B3B4BE;
  font-size : 0.75rem;
  font-weight : bold;
`;

const FlowButtonLayout = styled.div`
  padding : 0 5%;
  padding-bottom : 10%;
  clear: both;

`;

const BeforeButton = styled.button`
  float : left;
  background : #B3B4BE;
  border-radius : 8px;
  color : #4C4C50;
  padding : 1.5% 4%;
  width : 168px;
  border: none;
  font-size : 1rem;
`;

const AfterButton = styled.button`
  float : right;
  width : 304px;
  background : #B3B4BE;
  border-radius : 8px;
  color : #E2E1E2;
  padding : 1.5% 4%;
  border: none;
  font-size : 1rem;
`;
const StepOne = ({ nextButton, object }) => {

  const [stepOneObj, setStepOne] = React.useState<any>({
    nickNm : '',
    introduction: '',
    profileUrl : {},
    profilePreview : '',
    career: '',
    celPhone: '',
    portFolioLink: [],
    addUrl : [{
      key : 0,
      data : '',
      fixFlag : false
    }],
    addUrlIdx : 1,
    sns: [
      {
        key : 1,
        id : ''
      },
      {
        key : 2,
        id : ''
      },
      {
        key : 3,
        id : ''
      },
      {
        key : 4,
        id : ''
      }
    ],
    songEsntlUrl: {},
    songEsntPreview : '',
    portFolioMainMusic: {
      lastModified: 0,
      name: '',
      size: 0,
      type: ''
    },
    
    portFolioSubMusic : [{
      lastModified: 0,
      name: '',
      size: 0,
      type: ''
    }]
  });

  const [nickNmFlag, setnickNmFlag] = React.useState<number>(0);
  const [introductionFlag, setintroductionFlag] = React.useState<number>(0);
  const [careerFlag, setcareerFlag] = React.useState<number>(0);
  const [celPhoneFlag, setcelPhoneFlag] = React.useState<number>(0);

  const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;

  // 포트폴리오 url, sns id, songchcurl
  const addUrlButton = (idx) => {

    let newArr = {
      key : stepOneObj.addUrlIdx,
      data : "",
      fixFlag : false
    }

    setStepOne({...stepOneObj, addUrlIdx : stepOneObj.addUrlIdx + 1, addUrl : stepOneObj.addUrl.concat(newArr)})
  }  
  
  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setStepOne({...stepOneObj, profilePreview : reader.result})

    }
    reader.readAsDataURL(file);
  }

  const handlePortFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setStepOne({...stepOneObj, songEsntPreview : reader.result})
    }
    reader.readAsDataURL(file);
  }
  
  // console.log(stepOneObj);
  React.useEffect(() => {
    setStepOne(object);
  }, [object])  
  React.useEffect(() => {
    // 0이 기본, 1 성공, 2 실패
    if (stepOneObj.nickNm !== "") {
      // 여기서 50자 length 걸어서 red, green판단
      setnickNmFlag(1)
    } else {
      // 여기서 일반형으로 변경 blue 입력 후, 삭제는 red
      if(nickNmFlag === 1){
        setnickNmFlag(2);
      }
      else{
        setnickNmFlag(0);
      }
    }

    if (stepOneObj.introduction !== "") {
      if(stepOneObj.introduction.length >= 50){
        setintroductionFlag(1)
      }
      else{
        setintroductionFlag(2)
      }
    } 
    else {
      if(introductionFlag === 1 || introductionFlag === 2){
        setintroductionFlag(2);
      }
      else{
        setintroductionFlag(0);
      }
    }

    if (stepOneObj.career !== "") {
      if(stepOneObj.career.length >= 100){
        setcareerFlag(1)
      }
      else{
        setcareerFlag(2)
      }
    } 
    else {
      if(careerFlag === 1 || careerFlag === 2){
        setcareerFlag(2);
      }
      else{
        setcareerFlag(0);
      }
    }

    if (stepOneObj.celPhone !== "") {
      if(stepOneObj.celPhone.match(phoneNumberRegExp)){
        setcelPhoneFlag(1)
      }
      else{
        setcelPhoneFlag(2)
      }
    } 
    else {
      if(celPhoneFlag === 1 || celPhoneFlag === 2){
        setcelPhoneFlag(2);
      }
      else{
        setcelPhoneFlag(0);
      }
    }

  }, [stepOneObj]);
  
  return (
  <>
    <StepOneContainer>
      <StepOneTitle><span style={{fontWeight : "bold"}}>STEP1</span> 뮤지션 소개 정보</StepOneTitle>
      <OneThird/>
      <StepOneNeeds><span style={{color : "#6865FC"}}>*</span>는 필수입니다.</StepOneNeeds>
      
      <FormContainer>
        <FormContainerTitle>뮤지션 활동명<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        {nickNmFlag === 0 ?
        <FormContainerInput defaultValue={stepOneObj.nickNm} onChange={e => {
          // enrollData.dispatch
          setStepOne({...stepOneObj, nickNm : e.target.value});
        }
        }/>
        :
        (nickNmFlag === 1 ? 
        <FormContainerInput defaultValue={stepOneObj.nickNm} onChange={e => {
          setStepOne({...stepOneObj, nickNm : e.target.value});
        }}/>
        : 
        <FormContainerInput style={{border : "1px solid #C93E37"}} onChange={e => {
          setStepOne({...stepOneObj, nickNm : e.target.value});
        }}/>
        )
        
        }
        

      </FormContainer>

      <FormContainer>
        <FormContainerTitle>프로필 사진<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerProfile>
          
          {stepOneObj.profilePreview === '' ? 
          
          <img
            src="/static/vector.png"
            alt="vector"
            style={{
                width : 45,
                height : 45,
                borderRadius : "50%",
                float : "left",
                marginRight : "3%"
            }}
          />
          : 
          <img
            src={stepOneObj.profilePreview}
            alt="vector"
            style={{
                width : 45,
                height : 45,
                borderRadius : "50%",
                float : "left",
                marginRight : "3%"
            }}
          />
          
          
          }

          

          <div>
            <FormContainerProfileUpload onClick={()=>{
              document.getElementById('getFile').click();
            }}>업로드
            </FormContainerProfileUpload>
            <input accept="image/*" style={{visibility : "hidden"}} type="file" id="getFile" onChange={e => {
              // console.log(e.target.files[0], typeof e.target.files[0])
              handleFileOnChange(e);
              setStepOne({...stepOneObj, profileUrl : e.target.files[0]})
            }}/>

            <FormContainerProfileContent>250x250 픽셀에 최적화되어 있으며, 10Mb 이하의 JPG, GIF, PNG 파일을 지원합니다.</FormContainerProfileContent>
          </div>
        </FormContainerProfile>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>카피라이트<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        
        <FormContainerInputTitle>
          <div style={{fontSize : "0.875rem", float:"left"}}>뮤지션으로서의 자신을 한문장으로 표현해주세요</div>
          {introductionFlag === 1 ?
          <div style={{float : "right", fontSize:"0.625rem", color : "#6865FC"}}><span style={{color : "#6865FC"}}>✓ </span>최소 50자</div>
          :
          <div style={{float : "right", fontSize:"0.625rem", color : "#6865FC"}}>최소 50자 이상 작성해주세요.</div>
          }
          
        </FormContainerInputTitle>

        {introductionFlag === 0 ?
        <FormContainerInput defaultValue={stepOneObj.introduction} style={{marginBottom : "3%"}}onChange={e => {
          setStepOne({...stepOneObj, introduction : e.target.value})}
        }/>
        :
        (introductionFlag === 1 ? 
        <FormContainerInput defaultValue={stepOneObj.introduction} style={{marginBottom : "3%"}}onChange={e => {
          setStepOne({...stepOneObj, introduction : e.target.value})}
        }/>
        : 
        <FormContainerInput defaultValue={stepOneObj.introduction} style={{marginBottom : "3%", border : "1px solid #C93E37"}}onChange={e => {
          setStepOne({...stepOneObj, introduction : e.target.value})}
        }/>
        )
        
        }
        

      </FormContainer>

      <FormContainer>
        <FormContainerTitle>경력<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        
        <FormContainerInputTitle>
          <div style={{fontSize : "0.875rem", float:"left"}}>발매한 음원, 의뢰 경력 등을 서술해주세요.</div>

          {careerFlag === 1 ?
          <div style={{float : "right", fontSize:"0.625rem", color : "#6865FC"}}><span style={{color : "#6865FC"}}>✓ </span>최소 100자</div>
          :
          <div style={{float : "right", fontSize:"0.625rem", color : "#6865FC"}}>최소 100자 이상 작성해주세요.</div>
          }
        </FormContainerInputTitle>
        
        {careerFlag === 0 ?
        <FormContainerTextarea style={{marginBottom : "3%", height : 200}} defaultValue={stepOneObj.career} onChange={e => {
          setStepOne({...stepOneObj, career : e.target.value})}
        }/>
        :
        (careerFlag === 1 ? 
          <FormContainerTextarea style={{marginBottom : "3%", height : 200}} defaultValue={stepOneObj.career} onChange={e => {
            setStepOne({...stepOneObj, career : e.target.value})}
          }/>
        : 
        <FormContainerTextarea style={{marginBottom : "3%", height : 200, border : "1px solid #C93E37"}} defaultValue={stepOneObj.career} onChange={e => {
          setStepOne({...stepOneObj, career : e.target.value})}
        }/>
        )
        
        }

      </FormContainer>

      <FormContainer>
        <FormContainerTitle>포트폴리오 링크</FormContainerTitle>

          {stepOneObj.addUrl.map((value, idx) => {
            return (
              <div key={idx}>
              <FormContainerFixLayout>
                {value.data === "stopped" ? 
                // stopped 된 레이아웃
                <FormContainerFixButton key={idx} style={{display : "none"}}/>
                :
                (
                  
                // 정상 레이아웃 
                  value.fixFlag ? 
                  
                  // fixed 되어, 삭제루틴
                  <FormContainerFixButton key={idx} onClick={() => {
                    let removeArr = [...stepOneObj.addUrl];
                    
                    for(let i = 0 ; i < removeArr.length ; i++){
                      if(removeArr[i].key === idx){
                        removeArr[i].data = "stopped";
                      }
                    }
  
                    setStepOne({...stepOneObj, addUrl : removeArr})
                    setStepOne({...stepOneObj, portFolioLink : stepOneObj.portFolioLink = removeArr.filter(item => item.key !== idx && item.data !== "" && item.data !== "stopped" && item.fixFlag !== false)})
                  }}>삭제</FormContainerFixButton>
                  : 
                  // fixed 하기 위한, 생성 루틴
                  <FormContainerFixButton key={idx} onClick={() => {
                    let fixedArr = [...stepOneObj.addUrl];
                    let keyNum = 0          

                    if(value.data === ""){ 
                      console.log("error")
                    }
                    else{
                      for(let i = 0 ; i < fixedArr.length ; i++){
                        if(fixedArr[i].key === idx){
                          keyNum = i;
                          fixedArr[i].fixFlag = true;
                        }
                      }
    
                      setStepOne({...stepOneObj, addUrl : fixedArr})
                      setStepOne({...stepOneObj, portFolioLink : stepOneObj.portFolioLink.concat({key : idx, data : fixedArr[keyNum].data, fixFlag : true})})
                    }
                    
                  }}>생성</FormContainerFixButton>   
                )
              }
                
                
              </FormContainerFixLayout>

              {value.data === "stopped" ? 
              <FormContainerInput disabled style={{marginBottom : "3%", width: "40%", display : "none"}} key={idx}/> 
              :
                (value.fixFlag ?
                  <FormContainerInput defaultValue={value.data} disabled style={{marginBottom : "3%", width: "40%"}} key={idx}/> 
                  : 
                  // 입력 가능한 폼 onChange!!
                  <FormContainerInput defaultValue={value.data} style={{marginBottom : "3%", width: "40%"}} key={idx} onChange={e => {
                    
                    let inputArr = [...stepOneObj.addUrl];
                    
                    for(let i = 0 ; i < inputArr.length ; i++){
                      if(inputArr[i].key === idx){
                        inputArr[i].data = e.target.value;
                      }
                    }
                    setStepOne({...stepOneObj, addUrl : inputArr})
                  }}/>
                )
              }
              </div>
             )})}
          

          
        <div><div style={{width : "30%"}}/></div>
  
        <FormContainerAddURL> 
          <FormContainerAddURLButton onClick={() => {addUrlButton(stepOneObj.addUrlIdx)}}>+ url추가하기</FormContainerAddURLButton>
        </FormContainerAddURL>
        
        <div><div style={{width : "30%"}}/></div>

        <FormContainerProfileContent style={{width : "73%", float : "right", marginBottom : "2%"}}> 
          유튜브, 사운드클라우드, 개인사이트 등 작업 음원을 올리는 포트폴리오 사이트 링크를 등록해주세요
        </FormContainerProfileContent>
        
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>휴대폰 번호<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>

        {celPhoneFlag === 0 ?
        <FormContainerInput defaultValue={stepOneObj.celPhone} placeholder="010-1234-5678" onChange={e => {
          setStepOne({...stepOneObj, celPhone : e.target.value})}
        }/>
        :
        (celPhoneFlag === 1 ? 
          <FormContainerInput defaultValue={stepOneObj.celPhone} placeholder="010-1234-5678" onChange={e => {
            setStepOne({...stepOneObj, celPhone : e.target.value})}
          }/>
        : 
        <FormContainerInput placeholder="010-1234-5678" style={{border : "1px solid #C93E37"}} onChange={e => {
          setStepOne({...stepOneObj, celPhone : e.target.value})}
        }/>
        )
        
        }
        

        <div><div style={{width : "30%"}}/></div>

        <FormContainerProfileContent style={{width : "73%", float : "right", marginBottom : "2%", marginTop : "2%"}}> 
          거래가 성사되기 전에는 뮤지션의 연락처가 공개되지 않습니다. 원활한 소통을 위해 연락처를 기입해주세요.
        </FormContainerProfileContent>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>SNS 연락처</FormContainerTitle>
        <div style={{position : "relative", top: "-3vh"}}>
          <FormContainerSnsLayout> 

            <FormContainerInput defaultValue={stepOneObj.sns[0].id} placeholder="사용 계정을 입력하세요." style={{marginBottom : "3%", width : "46%", float : "right"}} onChange={e => {
              let newArr = [...stepOneObj.sns];
              newArr[0].id = e.target.value
              setStepOne({...stepOneObj, sns : newArr})
            }}/>
            
            <FormContainerSnsName>
                카카오톡
            </FormContainerSnsName>

          </FormContainerSnsLayout>

          
          <FormContainerSnsLayout> 

            <FormContainerInput defaultValue={stepOneObj.sns[1].id} placeholder="사용 계정을 입력하세요." style={{marginBottom : "3%", width : "46%", float : "right"}} onChange={e => {
              let newArr = [...stepOneObj.sns];
              newArr[1].id = e.target.value
              setStepOne({...stepOneObj, sns : newArr})
            }}/>

            <FormContainerSnsName>
                페이스북
            </FormContainerSnsName>

          </FormContainerSnsLayout>

          
          <FormContainerSnsLayout> 

            <FormContainerInput defaultValue={stepOneObj.sns[2].id} placeholder="사용 계정을 입력하세요." style={{marginBottom : "3%", width : "46%", float : "right"}} onChange={e => {
              let newArr = [...stepOneObj.sns];
              newArr[2].id = e.target.value
              setStepOne({...stepOneObj, sns : newArr})
            }}/>
            
            <FormContainerSnsName>
                인스타그램
            </FormContainerSnsName>

          </FormContainerSnsLayout>

          
          <FormContainerSnsLayout> 

            <FormContainerInput defaultValue={stepOneObj.sns[3].id} placeholder="사용 계정을 입력하세요." style={{marginBottom : "3%", width : "46%", float : "right"}} onChange={e => {
              let newArr = [...stepOneObj.sns];
              newArr[3].id = e.target.value
              setStepOne({...stepOneObj, sns : newArr})
            }}/>
            
            <FormContainerSnsName>
                트위터
            </FormContainerSnsName>

          </FormContainerSnsLayout>



          <FormContainerProfileContent style={{width : "73%", float : "right"}}> 
            원활한 소통을 위해 고객이 확인 가능한 SNS 아이디를 남겨주세요.
          </FormContainerProfileContent>
        </div>
      </FormContainer>

      <FormContainer style={{height : 380, paddingBottom : 0}}>
        <FormContainerTitle>포트폴리오 음원<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>

        <FormContainerInputTitle>
          <div style={{fontSize : "0.875rem", marginBottom : "3%"}}><span style={{color : "#6865FC"}}>*</span>대표곡의 앨범 커버 이미지를 업로드해주세요.</div>
        </FormContainerInputTitle>


        <FormContainerProfile style={{top : "0", position : "initial", borderBottom : "1px solid rgba(104,101,252,0.4)", paddingBottom : "3%"}}>
          

        {stepOneObj.songEsntPreview === '' ? 
          
          <img
            src="/static/vector.png"
            alt="vector"
            style={{
                width : 45,
                height : 45,
                borderRadius : "50%",
                float : "left",
                marginRight : "3%"
            }}
          />
          : 
          <img
            src={stepOneObj.songEsntPreview}
            alt="vector"
            style={{
                width : 45,
                height : 45,
                borderRadius : "50%",
                float : "left",
                marginRight : "3%"
            }}
          />
          }

          <div>
            <FormContainerProfileUpload onClick={()=>{
              document.getElementById('getPortFile').click()
            }}>업로드
            </FormContainerProfileUpload>
            <input accept="image/*" style={{visibility : "hidden"}} type="file" id="getPortFile"
              onChange={e => {
              // console.log(e.target.files[0], typeof e.target.files[0])
              handlePortFileOnChange(e);
              setStepOne({...stepOneObj, songEsntlUrl : e.target.files[0]})
              }}
            />

            <FormContainerProfileContent>250x250 픽셀에 최적화되어 있으며, 10Mb 이하의 JPG, GIF, PNG 파일을 지원합니다.</FormContainerProfileContent>
          </div>
        </FormContainerProfile>

        <FormContainerInputTitle style={{marginTop : "3%"}}>
          <div style={{fontSize : "0.875rem", marginBottom : "3%"}}>포트폴리오 음원을 등록해주세요. (mp3,mp4 형식)</div>
        </FormContainerInputTitle>


        <FormContainerInputDescription>
          <div style={{marginBottom : "3%"}}><span style={{color : "#6865FC"}}>*</span>대표곡을 업로드 해주세요.</div>
        </FormContainerInputDescription>

        <div style={{lineHeight : "32px", clear : "both"}}> 
          <div style={{float : "right", width : "32%", paddingLeft : "3%"}}>
            <FormContainerProfileUpload onClick={()=>{
              document.getElementById('getMusic').click()
            }}>업로드
            </FormContainerProfileUpload>
            
            <input accept=".mp3,.mp4" style={{visibility : "hidden"}} type="file" id="getMusic"
            onChange={e => {
              // console.log(e.target.files[0])
              setStepOne({...stepOneObj, portFolioMainMusic : e.target.files[0]})
            }}
            />

          </div>
          {stepOneObj.portFolioMainMusic.name === "" ? 
          
          <MusicNameLayout  style={{marginBottom : "3%", width : "35%", float : "right"}}>
            파일명이 음악이름으로 등록됩니다.
          </MusicNameLayout>
          :
          
          <MusicNameLayout  style={{marginBottom : "3%", width : "35%", float : "right"}}>
            {stepOneObj.portFolioMainMusic.name}
          </MusicNameLayout>
          }
          
          
        </div>



        <FormContainerInputDescription>
          <div style={{marginBottom : "3%"}}>대표음원 외의 포트폴리오 곡을 업로드 해주세요. (최대 9곡)</div>
        </FormContainerInputDescription>

        <div style={{lineHeight : "32px", clear : "both"}}> 

          <div style={{float : "right", width : "32%", paddingLeft : "3%"}}>
            <FormContainerProfileUpload onClick={()=>{
              document.getElementById('getSubMusic').click()
            }}>업로드
            </FormContainerProfileUpload>
            
            <input accept=".mp3,.mp4" multiple style={{visibility : "hidden"}} type="file" id="getSubMusic"
            onChange={e => {
              let subMusicArr = []
              for(let i = 0 ; i < e.target.files.length ; i++){
                subMusicArr.push(e.target.files[i])
              }
              setStepOne({...stepOneObj, portFolioSubMusic : subMusicArr})
            }}
            />

          </div>

          
          {stepOneObj.portFolioSubMusic[0].size === 0? 
          <MusicNameLayout style={{marginBottom : "3%", width : "35%", float : "right"}}>
          파일명이 음악이름으로 등록됩니다.
          </MusicNameLayout>
          :
          
          (stepOneObj.portFolioSubMusic.map((value, idx) => {

            if(idx === 0){
              return (
                
                  <MusicNameLayout key={idx} style={{marginBottom : "3%", width : "35%", float : "right"}}>
                    {value.name}
                  </MusicNameLayout>
                
              )
            }
            else{
              return (
                
                  <MusicNameLayout key={idx} style={{marginBottom : "3%", width : "35%", float : "right", marginRight : "35%"}}>
                    {value.name}
                  </MusicNameLayout>
                
              )
            }
            
          }))}
          
        </div>

        <FormContainerProfileContent style={{float : "right", width : "73%"}}>저작권에 주의해주세요. 반드시 자신이 작업한 작업물을 업로드해주세요.</FormContainerProfileContent>
        <FormContainerProfileContent style={{float : "right", width : "73%"}}>공동작업물은 대표곡으로 업로드가 불가합니다.</FormContainerProfileContent>
      </FormContainer>

      <FlowButtonLayout>

          <BeforeButton onClick={()=>{history.back()}}>이전으로</BeforeButton>
          {nickNmFlag === 1 &&
          introductionFlag === 1 &&
          (stepOneObj.profileUrl !== {}) &&
          careerFlag === 1 &&
          celPhoneFlag === 1 &&
          (stepOneObj.songEsntlUrl !== {}) &&
          (stepOneObj.portFolioMainMusic.size !== 0)
          ? 
          <AfterButton onClick={()=>{nextButton(1, stepOneObj)}} style={{cursor : "pointer", background : "#6865FC"}}>저장하고 다음으로</AfterButton>
          :
          <AfterButton>저장하고 다음으로</AfterButton>
          }
          

      </FlowButtonLayout>


    </StepOneContainer>
  </>
  );
};

export default StepOne;