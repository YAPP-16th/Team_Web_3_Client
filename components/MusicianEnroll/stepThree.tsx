import * as React from "react";
import styled from "styled-components";
import Fixed from "../ProgressBar/fixed";
import Link from "next/link";
interface Props {}

const StepOneContainer = styled.div`
  width: 100%;
  background: #040104;
  padding-bottom: 10%;
`;

const StepOneTitle = styled.div`
  font-size: 1rem;
  color: #6865fc;
`;

const StepOneNeeds = styled.div`
  font-size: 0.75rem;
  color: #b3b4be;
  margin-left: auto;
  padding-bottom: 1%;
  padding-top: 3%;
`;

const FormContainer = styled.div`
  clear: both;
  display: flex;
  padding-top: 3%;
  padding-bottom: 6%;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  border-radius: 0.741935px;
`;

const FormContainerTitle = styled.div`
  color: #b3b4be;
  font-size: 1rem;
  padding-top: 0.5%;
  flex: 1;
`;

const FormContainerRight = styled.div`
  flex: 2.5;
`;
const FormContainerMainDesc = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: #b3b4be;
`;

const FormContainerSubDesc = styled.div`
  font-size: 0.875rem;
  color: #b3b4be;
  padding: 1.5% 0;
  margin: 1.5% 0;
  flex: none;
`;

const FormContainerDesc = styled.div`
  color: #6865fc;
  font-size: 0.875rem;
  margin-top: 3%;
  border-bottom: 1px solid rgba(104, 101, 252, 0.4);
  padding-bottom: 2%;
`;

const FormContainerRadioLayout = styled.div`
  color: #b3b4be;
  font-size: 0.875rem;
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: 10px 0 0;
  width: 100%;
  margin-bottom: 1%;
`;

const FormContainerRadioLabel = styled.label`
  color: #666;
  font-weight: normal;
  cursor: pointer;
  &:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 5px 0 0;
    width: 20px;
    height: 20px;
    border-radius: 11px;
    border: 2px solid #3e3e41;
    background-color: transparent;
  }
`;

const FormContainerRadio = styled.input`
  display: none;

  &:checked + ${FormContainerRadioLabel}:after {
    border-radius: 11px;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 9px;
    left: 10px;
    content: " ";
    display: block;
    background: #6865fc;
  }
`;

const FormContainerTextarea = styled.textarea`
  color: #b3b4be;
  background: #121212;
  border-radius: 8px;
  padding: 1.5%;
  border: none;
  line-height: 20px;
  width: 97%;
  height: 120px;
  && {
    ::placeholder {
      color: rgba(179, 180, 190, 0.5);
      font-size: 0.75rem;
    }
  }
  &:focus {
    outline: none;
  }
`;

const FormContainerInput = styled.input`
  color: #b3b4be;
  background: #121212;
  border-radius: 8px;
  padding: 1.5%;
  border: none;
  line-height: 20px;
  width: 20%;
  height: 32px;
  margin-top: 2%;
  && {
    ::placeholder {
      color: rgba(179, 180, 190, 0.5);
      font-size: 0.75rem;
    }
  }
  &:focus {
    outline: none;
  }
`;

const FlowButtonLayout = styled.div`
  padding-top: 10%;
  clear: both;
`;

const BeforeButton = styled.button`
  float: left;
  background: #b3b4be;
  border-radius: 8px;
  color: #4c4c50;
  padding: 1.5% 4%;
  width: 168px;
  border: none;
  font-size: 1rem;
`;

const AfterButton = styled.button`
  float: right;
  width: 304px;
  background: #b3b4be;
  border-radius: 8px;
  color: #e2e1e2;
  padding: 1.5% 4%;
  border: none;
  font-size: 1rem;
`;

const StepThree = ({ nextButton, beforeButton, object }) => {
  const [stepThreeObj, setStepThree] = React.useState({
    styPrc01: "",
    styExpln01: "",
    styPrc02: "",
    styExpln02: "",
    styPrc03: "",
    styExpln03: "",
    payMethod: false,
  });

  React.useEffect(() => {
    setStepThree(object);
    window.scrollTo(0, 0);
  }, [object]);

  return (
    <>
      <StepOneContainer>
        <StepOneTitle>
          <span style={{ fontWeight: "bold" }}>STEP3</span> 가격옵션
        </StepOneTitle>
        <Fixed />
        <StepOneNeeds style={{ float: "right" }}>
          <span style={{ color: "#6865FC" }}>*</span>는 필수입니다.
        </StepOneNeeds>

        <FormContainer>
          <FormContainerTitle>
            가격 가이드<span style={{ color: "#6865FC" }}>*</span>
          </FormContainerTitle>
          <FormContainerRight>
            <FormContainerRadioLayout>
              <FormContainerRadio
                onClick={(e) => {
                  setStepThree({ ...stepThreeObj, payMethod: true });
                }}
                type="radio"
                value="none"
                name="pay"
                id="ritema"
              />
              <FormContainerRadioLabel htmlFor="ritema">
                가격 협의
              </FormContainerRadioLabel>
            </FormContainerRadioLayout>

            <FormContainerRadioLayout>
              <FormContainerRadio
                onClick={(e) => {
                  setStepThree({ ...stepThreeObj, payMethod: false });
                }}
                type="radio"
                value="fixed"
                name="pay"
                id="ritemb"
                defaultChecked
              />
              <FormContainerRadioLabel htmlFor="ritemb">
                가격 고정
              </FormContainerRadioLabel>
            </FormContainerRadioLayout>

            {stepThreeObj.payMethod === false ? (
              <>
                <FormContainerDesc>옵션 A</FormContainerDesc>
                <FormContainerInput
                  defaultValue={stepThreeObj.styPrc01}
                  placeholder="희망가를 입력하세요."
                  type="number" pattern="[0-9]*" step="1000"
                  onChange={(e) => {
                    setStepThree({ ...stepThreeObj, styPrc01: e.target.value });
                  }}
                />{" "}
                <span style={{ color: "#B3B4BE", fontSize: "0.875rem" }}>
                  원
                </span>
                <div style={{ display: "flex" }}>
                  <FormContainerSubDesc>
                    옵션 A 상품에 대해 설명해주세요.
                  </FormContainerSubDesc>
                  <StepOneNeeds>1000자</StepOneNeeds>
                </div>
                <FormContainerTextarea
                  defaultValue={stepThreeObj.styExpln01}
                  onChange={(e) => {
                    setStepThree({
                      ...stepThreeObj,
                      styExpln01: e.target.value,
                    });
                  }}
                  placeholder="구체적 작업 기간, 피드백 방식, 수정가능 횟수 등을 고려하여 상품을 구성해주세요."
                />
                <FormContainerDesc>옵션 B</FormContainerDesc>
                <FormContainerInput
                  defaultValue={stepThreeObj.styPrc02}
                  placeholder="희망가를 입력하세요."
                  type="number" pattern="[0-9]*" step="1000"
                  onChange={(e) => {
                    setStepThree({ ...stepThreeObj, styPrc02: e.target.value });
                  }}
                />{" "}
                <span style={{ color: "#B3B4BE", fontSize: "0.875rem" }}>
                  원
                </span>
                <div style={{ display: "flex" }}>
                  <FormContainerSubDesc>
                    옵션 B 상품에 대해 설명해주세요.
                  </FormContainerSubDesc>
                  <StepOneNeeds>1000자</StepOneNeeds>
                </div>
                <FormContainerTextarea
                  defaultValue={stepThreeObj.styExpln02}
                  onChange={(e) => {
                    setStepThree({
                      ...stepThreeObj,
                      styExpln02: e.target.value,
                    });
                  }}
                  placeholder="구체적 작업 기간, 피드백 방식, 수정가능 횟수 등을 고려하여 상품을 구성해주세요."
                />
                <FormContainerDesc>옵션 C</FormContainerDesc>
                <FormContainerInput
                  defaultValue={stepThreeObj.styPrc03}
                  placeholder="희망가를 입력하세요."
                  type="number" pattern="[0-9]*" step="1000"
                  onChange={(e) => {
                    setStepThree({ ...stepThreeObj, styPrc03: e.target.value });
                  }}
                />{" "}
                <span style={{ color: "#B3B4BE", fontSize: "0.875rem" }}>
                  원
                </span>
                <div style={{ display: "flex" }}>
                  <FormContainerSubDesc>
                    옵션 C 상품에 대해 설명해주세요.
                  </FormContainerSubDesc>
                  <StepOneNeeds>1000자</StepOneNeeds>
                </div>
                <FormContainerTextarea
                  defaultValue={stepThreeObj.styExpln03}
                  onChange={(e) => {
                    setStepThree({
                      ...stepThreeObj,
                      styExpln03: e.target.value,
                    });
                  }}
                  placeholder="구체적 작업 기간, 피드백 방식, 수정가능 횟수 등을 고려하여 상품을 구성해주세요."
                />
              </>
            ) : (
              <div style={{ height: "30vh" }}></div>
            )}
          </FormContainerRight>
        </FormContainer>

        <FlowButtonLayout>
          <BeforeButton
            onClick={() => {
              beforeButton(3, stepThreeObj);
            }}
          >
            이전으로
          </BeforeButton>
          {stepThreeObj.payMethod === true ||
          (stepThreeObj.styExpln01 !== "" && stepThreeObj.styPrc01 !== "") ||
          (stepThreeObj.styExpln02 !== "" && stepThreeObj.styPrc02 !== "") ||
          (stepThreeObj.styExpln03 !== "" && stepThreeObj.styPrc03 !== "") ? (
            // <Link href="/detail">
              <AfterButton
                onClick={() => {
                  nextButton(3, stepThreeObj);
                }}
                style={{ cursor: "pointer", background: "#6865FC" }}
              >
                뮤지션으로 등록하기
              </AfterButton>
            // {/* </Link> */}
          ) : (
            <AfterButton>뮤지션으로 등록하기</AfterButton>
          )}
        </FlowButtonLayout>
      </StepOneContainer>
    </>
  );
};

export default StepThree;
