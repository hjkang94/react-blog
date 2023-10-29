import styled from '@emotion/styled';
import { Button } from 'components/Button';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.2rem;
`;

const Input = styled.input`
  font-size: 1.2rem;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

interface Props {
  readonly onClose?: () => void;
}

export const Form = ({ onClose }: Props) => {
  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그 글 등록</Title>
        <InputGroup>
          <Label>제목: </Label>
          <Input />
        </InputGroup>
        <InputGroup>
          <Label>내용: </Label>
          <Input />
        </InputGroup>
        <Actions>
          <Button label="등록" onClick={onClose} />
          <Button label="취소" color="#6e6e6e" onClick={onClose} />
        </Actions>
      </Contents>
    </Container>
  )
}