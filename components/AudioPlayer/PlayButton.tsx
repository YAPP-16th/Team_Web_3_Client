import * as React from "react";
import styled from "styled-components";

interface Props {
  playAudio: () => void;
  size: number;
  status: boolean;
}

const Button = styled.button`
  border: 1px solid #e2e1e2;
  width: ${({ size }: { size: number }) => size}px;
  height: ${({ size }: { size: number }) => size}px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
`;

const Toggle = styled.input.attrs(({ checked }: { checked: boolean }) => ({
  type: "checkbox",
  checked,
  readOnly: true,
  disabled: false,
}))`
  appearance: none;
  outline: none;
  width: ${({ size }: { size: number }) => size}px;
  height: ${({ size }: { size: number }) => size}px;
  background-size: cover;
  background-position: center center;
  background-image: url("/static/play.png");
  background-repeat: no-repeat;
  &:checked {
    background-image: url("/static/pause.png");
  }
`;

const PlayButton = ({ playAudio, size, status }: Props): React.ReactElement => {
  return (
    <Button onClick={playAudio} size={size}>
      <Toggle checked={status} size={size} />
    </Button>
  );
};

export default PlayButton;
