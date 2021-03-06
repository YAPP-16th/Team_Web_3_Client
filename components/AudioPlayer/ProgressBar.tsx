import * as React from "react";
import styled from "styled-components";

interface Props {
  current: number;
  duration: number;
  changeCurrent: (value: number) => void;
}
const ProgressWrapper = styled.div`
  span {
    display: inline-block;
    font-size: 1.125rem;
    color: #b3b4be;
    width: 3em;
    &:first-child {
      text-align: right;
    }
    &:last-child {
      text-align: left;
    }
  }
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #b3b4be;
    overflow: hidden;
    height: 8px;
    width: 800px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1px;
      box-shadow: -100vw 0 0 100vw #6865fc;
    }
  }
`;

const TimeDisplay = ({ value }: { value: number }): React.ReactElement => (
  <span>
    {Math.floor(value / 60)}:{Math.floor(value % 60) < 10 && 0}
    {Math.floor(value % 60)}
  </span>
);

const ProgressBar = ({
  current = 0,
  duration,
  changeCurrent
}: Props): React.ReactElement => {
  const changeHandler = React.useCallback(
    (event: React.SyntheticEvent<HTMLInputElement, Event>) => {
      changeCurrent(Number((event.target as HTMLInputElement).value));
    },
    []
  );

  return (
    <div>
      <ProgressWrapper>
        <TimeDisplay value={current} />
        <input
          type="range"
          max={duration}
          min={0}
          step={0.01}
          value={current}
          onChange={changeHandler}
        />
        <TimeDisplay value={duration} />
      </ProgressWrapper>
    </div>
  );
};

export default ProgressBar;
