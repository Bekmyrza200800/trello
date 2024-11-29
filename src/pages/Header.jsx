import React from "react";
import styled from "styled-components";
import MainPage from "./Main";

export default function Header() {
  const navigate = useNavigate(<MainPage />);

  const handleCreateClick = () => {
    console.log("Navigate to /main triggered");
    navigate("/main");
  };

  return (
    <MainHeader>
      <LogoSection>
        <Logo src={trello} alt="Trello Logo" />
        <h2>Trello</h2>
      </LogoSection>
      <Nav>
        <NavItem>Рабочие пространства</NavItem>
        <NavItem>Недавние</NavItem>
        <NavItem>В избранном</NavItem>
        <NavItem>Шаблоны</NavItem>
        <Button onClick={handleCreateClick}>Создать</Button>
      </Nav>
      <Actions>
        <SearchInput type="text" placeholder="Поиск" />
        <ProfileIcon />
      </Actions>
    </MainHeader>
  );
}
const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
`;
const LogoSection = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin-left: 10px;
  }
`;
const Logo = styled.img`
  height: 30px;
  color: white;
`;
const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;
const NavItem = styled.a`
  text-decoration: none;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #0079bf;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #005a8c;
  }
`;
const SearchInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
const ProfileIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
`;
