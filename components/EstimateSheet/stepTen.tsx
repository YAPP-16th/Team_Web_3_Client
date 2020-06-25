import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/ten";
import {DatePicker} from "antd";
import moment from 'moment';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const EstimateUserInfoData = styled.div`
    flex: 0.2;
    color : #E2E1E2;
    padding-right : 7%;
`;


const EstimateMainDesc = styled.div`
    font-size : 1.25rem;
    font-weight : bold;
    color : #6865FC;
    margin-bottom : 24px;
`;

const EstimateSubTitle = styled.div`
    font-size : 1rem;
    color : #B3B4BE;
    font-weight :bold;
    border-bottom: 1px solid  #3E3E41;
    padding-bottom: 5px;
    margin-bottom : 8px;
`;

const EstimateSubDesc = styled.div`
    font-size: 0.875rem;
    line-height : 23px;
    color : #B3B4BE;
`;

const EstimateContentMain = styled.div`
    flex: 0.8;
    background : #121212;
    border-radius : 8px;
    width : 800px;
    height : 693px;

`;

const EstimateContentMainTitle = styled.div`
    width : 100%;
    height : 56px;
    position : relative;
    border-radius: 8px;
    background: #181818;
`;
const EstimateContentMainSub = styled.div`
    width : 90%;
    height : 425px;
    margin : 7% 5%;
`;

const EstimateContentMainSubTitle = styled.div`
    font-size : 1.25rem;
    color : #FFFFFF;
    font-weight : bold;
    clear : both;
    margin-top : 56px;
`;
const EstimateContentMainSubTitleBack = styled.div`
    font-size : 0.75rem;
    color : #B3B4BE;
    margin-top : 8px;
`;

const EstimateContentMainButton = styled.div`
    width : 100%;
    height : 96px;
    text-align : center;
    display: table;
`;

const RangePickerOver = styled(RangePicker)`
    
    background : #181818 !important;
    padding : 6px 13px 6px !important;
    border-radius : 8px !important;
    &&{
        .ant-picker-input > input {
            color : #B3B4BE;
        };
        .ant-picker-input {
            margin-top: 2px;
        }
        .anticon {
            color : #B3B4BE;
        }
        .ant-picker-clear {
            background : #121212;
            right : 13px;
        }
        .ant-picker-range-separator {
            margin-bottom : 2px;
            padding-right : 18px;
            padding-left : 0;
        };
        .ant-picker-suffix{
            margin-top : 3px;
            margin-left: -5px;
        };
        .ant-picker-cell {
            color : #3E3E41;
        }
    }
`;


const BeforeButton = styled.button`
    background : #121212;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    width : 344px;
    height : 48px;
    border: 0.6px solid #B3B4BE;
    font-size : 1rem;
    font-weight : bold;
    margin-right : 32px;
    cursor : pointer;
`;

const AfterButton = styled.button`
    width : 344px;
    height : 48px;
    background : #B3B4BE;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    border: none;
    font-size : 1rem;
`;
const index = ({nextButton, beforeButton, object}): React.ReactElement => {
  
    const [stepTen, setStepTen] = React.useState<any>({
        deadline : []
    }) 
    // console.log(stepTen.deadline);

    React.useEffect(() => {
        
        if(object.deadline.length > 0){
            setStepTen(object);
        }

        window.scrollTo(0, 0);
        
    }, [object]);
    return (
        <>
        <EstimateUserInfoData>
                        
            <img
                src={"/static/Frame.png"}
                alt="vector"
                style={{
                    width : 23,
                    height : 23,
                    borderRadius : "50%",
                    float : "left",
                    marginRight : "3%"
                }}
            />
            <EstimateMainDesc>튜나 팁</EstimateMainDesc>
            <EstimateSubTitle>마감일을 정할 때</EstimateSubTitle>
            <EstimateSubDesc> 
            뮤지션에게 적어도 일주일 이상의 충분한 작업시간을 주세요. 기간을 촉박하게 정하면 만족스러운 곡이 나오기 어렵답니다.
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>언제까지 완성하면 좋을까요?</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>최종 작업 마감일을 설정하세요.</EstimateContentMainSubTitleBack>
                
                {stepTen.deadline.length !== 0 ? 
                    <RangePickerOver
                        style={{marginTop : 24}}
                        value={[moment(stepTen.deadline[1], dateFormat), moment(stepTen.deadline[0], dateFormat)]}
                        format={dateFormat}
                        onChange={(e, timeString) => {
                            setStepTen({deadline : timeString})
                        }} 
                    />
                : 
                    <RangePickerOver
                        style={{marginTop : 24}}
                        defaultValue={[moment((moment()), dateFormat), moment(moment(), dateFormat)]}
                        format={dateFormat}
                        onChange={(e, timeString) => {
                        setStepTen({deadline : timeString})
                        }} 
                    /> 
                }
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(10, stepTen)}}>이전으로</BeforeButton>
                {
                
                stepTen.deadline.length > 0
                ? 
                <AfterButton onClick={()=>{nextButton(10, stepTen)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
                :
                <AfterButton>다음으로</AfterButton>
                }
                </div>
            </EstimateContentMainButton>

        </EstimateContentMain>

        </>
    );
};

export default index;
