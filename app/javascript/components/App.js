import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import EditTodo from './EditTodo'
import './App.css'

const Nabvar = styled.nav`
  background: #dbfffe;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 23px;
  letter-spacing: 3px;
`

const NavItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const NavItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`

function App() {
  return (
    <>
      <Nabvar>
        <Logo>
          TODO
        </Logo>
        <NavItems>
          <NavItem>
            <Link to="/todos">
              Todos
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/todos/new">
              Add New Todo
            </Link>
          </NavItem>
        </NavItems>
      </Nabvar>
      <Wrapper>
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/new" element={<AddTodo />} />
          <Route path="/todos/:id/edit" element={<EditTodo />} />
        </Routes>
      </Wrapper>
    </>
  )
}

export default App