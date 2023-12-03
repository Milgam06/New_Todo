import React, { useEffect, useState } from "react";

import { add_todo, delete_todos, get_todo } from "../services";
import * as S from "../styled";

export const Todos: React.FC = () => {
  const [addInput, setAddInput] = useState<string>("");
  const [gettingTodos, setGettingTodos] = useState<string[]>([]); // [
  const [currentTodos, setCurrentTodos] = useState<string[]>([]);

  const writeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddInput(event.target.value);
  };
  const onSubmit = () => {
    if (addInput === "") {
      return;
    } else {
      add_todo(addInput);
      setAddInput("");
    }
  };

  const deleteTodo = (name: string) => {
    delete_todos(name);
    const updatedTodos = JSON.parse(localStorage.getItem("myplans") || "[]");
    setGettingTodos(updatedTodos);
    setCurrentTodos(updatedTodos);
  };

  const getTodo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setGettingTodos(await get_todo(event.target.value));
    console.log(gettingTodos, "asdf");
  };

  useEffect(() => {
    const currentPlans = JSON.parse(localStorage.getItem("myplans") || "[]");
    setCurrentTodos(currentPlans);
    setGettingTodos(currentPlans);
  }, [localStorage.getItem("myplans")]);
  return (
    <S.Screen>
      <S.ContentBox>
        <S.SearchInput placeholder="search" onChange={getTodo} />
        <S.CurrentPlansCountWrapper>
          <S.CurrentPlansCount>{`현재 할 일이 ${currentTodos.length}개 남았어요!`}</S.CurrentPlansCount>
        </S.CurrentPlansCountWrapper>
        <S.TodoItemBox>
          {gettingTodos.length === currentTodos.length ? (
            currentTodos !== null || undefined ? (
              currentTodos.map((key) => (
                <S.TodoItem>
                  <S.TodoItemText>{key}</S.TodoItemText>
                  <S.TodoButton
                    onClick={() => deleteTodo(key)}
                    colors="#ec5958"
                  >
                    ×
                  </S.TodoButton>
                </S.TodoItem>
              ))
            ) : (
              <span>empty</span>
            )
          ) : (
            gettingTodos.map((key) => (
              <S.TodoItem>
                <S.TodoItemText>{key}</S.TodoItemText>
                <S.TodoButton
                  onClick={() => delete_todos(key)}
                  colors="#ec5958"
                >
                  ×
                </S.TodoButton>
              </S.TodoItem>
            ))
          )}
        </S.TodoItemBox>
        <S.TodoForm onSubmit={onSubmit}>
          <S.TodoInput
            placeholder="오늘 계획은 무엇인가요?"
            onChange={writeTodo}
          />
          <S.TodoButton type="submit" colors="#43b453">
            ⬆︎
          </S.TodoButton>
        </S.TodoForm>
      </S.ContentBox>
    </S.Screen>
  );
};
