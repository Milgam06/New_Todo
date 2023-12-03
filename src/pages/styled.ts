import styled from "@emotion/styled";

export const Screen = styled.div`
  width: 100vw auto;
`;

export const ContentBox = styled.div`
  background-color: #fff;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40rem;
  height: 55rem;
  border: 1px solid black;
  border-radius: 20px;
`;

export const TodoItemBox = styled.div`
  background-color: #fff;
  /* margin-top: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: row;
  width: 35rem;
  height: 40rem;
  border: 1px solid black;
  border-radius: 20px;
  overflow: auto;
`;
export const CurrentPlansCountWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  height: 3rem;
  /* border: 1px solid black; */
`;

export const CurrentPlansCount = styled.span`
  font-size: 1rem;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
  color: #1fc28c;
`;
export const TodoItem = styled.div`
  width: 100%;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
`;

export const TodoItemText = styled.div`
  width: 20rem;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  font-weight: 500;
`;
export const TodoForm = styled.form`
  /* margin-top: 1rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35rem;
  height: 8rem;
  /* border: 1px solid black; */
`;

export const TodoInput = styled.input`
  width: 29rem;
  height: 4rem;
  border: 1px solid black;
  border-radius: 20px;
  padding-left: 1rem;
  font-size: 2rem;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const SearchInput = styled.input`
  margin-top: 1rem;
  width: 34rem;
  height: 3rem;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding-left: 1rem;
  font-size: 1.5rem;
  font-family: "Spoqa Han Sans Neo", "sans-serif";
`;

export const TodoButton = styled.button<{ colors: string }>`
  background-color: ${(props) => props.colors};
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 20px;
  font-size: 2rem;
  text-align: center;
  color: white;
  cursor: pointer;
`;
