import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

function Card({ text, onRemove }) {
  return (
    <MainCardd>
      <Header/>
      <p>{text}</p>
      <AddRemove onClick={onRemove}>Удалить</AddRemove>
    </MainCardd>
  );
}

function Column({ title, cards, onAddCard, onRemoveColumn, onRemoveCard }) {
  const [newCardText, setNewCardText] = useState("");

  return (
    <MainColumn>
      <h2>{title}</h2>
      <MainCards>
        {cards.map((card, index) => (
          <Card key={index} text={card} onRemove={() => onRemoveCard(index)} />
        ))}
      </MainCards>
      <CardInput
        type="text"
        placeholder="Добавить карточку"
        value={newCardText}
        onChange={(e) => setNewCardText(e.target.value)}
      />
      <AddBtn
        onClick={() => {
          if (newCardText.trim()) {
            onAddCard(newCardText);
            setNewCardText("");
          }
        }}
      >
        Добавить карточку
      </AddBtn>
      <AddRemove onClick={onRemoveColumn}>Удалить колонку</AddRemove>
    </MainColumn>
  );
}

function App() {
  const [columns, setColumns] = useState([]);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const addColumn = () => {
    if (newColumnTitle.trim()) {
      setColumns([...columns, { title: newColumnTitle, cards: [] }]);
      setNewColumnTitle("");
    }
  };

  const removeColumn = (index) => {
    setColumns(columns.filter((_, i) => i !== index));
  };

  const addCardToColumn = (index, text) => {
    const updatedColumns = [...columns];
    updatedColumns[index].cards.push(text);
    setColumns(updatedColumns);
  };

  const removeCardFromColumn = (columnIndex, cardIndex) => {
    const updatedColumns = [...columns];
    updatedColumns[columnIndex].cards.splice(cardIndex, 1);
    setColumns(updatedColumns);
  };

  return (
    <MainApp>
      <h1>Trello</h1>
      <MainBoard>
        {columns.map((column, index) => (
          <Column
            key={index}
            title={column.title}
            cards={column.cards}
            onAddCard={(text) => addCardToColumn(index, text)}
            onRemoveColumn={() => removeColumn(index)}
            onRemoveCard={(cardIndex) => removeCardFromColumn(index, cardIndex)}
          />
        ))}
        <AddColumn>
          <CardInput
            type="text"
            placeholder="Название колонки"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
          />
          <AddBtn onClick={addColumn}>Добавить колонку</AddBtn>
        </AddColumn>
      </MainBoard>
    </MainApp>
  );
}

export default App;

const MainApp = styled.div`
  text-align: center;
  padding: 20px;
  h1 {
    margin-bottom: 20px;
  }
`;

const MainBoard = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px;
`;

const MainColumn = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    margin: 0 0 10px;
  }
`;

const MainCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainCardd = styled.div`
  background: #e3f2fd;
  border: 1px solid #90caf9;
  border-radius: 5px;
  padding: 10px;
  position: relative;

  p {
    margin: 0;
  }
`;
const CardInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ColumnInput = styled.div`
  width: 90%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const AddBtn = styled.div`
  background-color: #1976d2;
  color: white;
  border: none;
  padding: 8px 10px;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #1565c0;
  }
`;

const AddRemove = styled.div`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 8px 10px;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
  :hover {
    background-color: #ffffff;
  }
`;

const AddColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 250px;
  padding: 10px;
`;
