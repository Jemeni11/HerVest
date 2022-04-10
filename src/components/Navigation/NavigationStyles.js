import styled from 'styled-components'

export const NavSection = styled.section`
  padding: 30px 25px;
  width: 20vw;
  height: 90vh; 
  /* outline: 1px solid red; */
  * {
    max-width: 200px;
    font-size: 14px;
  }
`
export const NavLogo = styled.img`
  margin-bottom: 17px;
`
export const NavMenuText = styled.p`
  font-size: 14px;
  opacity: 0.7;
`
export const Nav = styled.nav`
  margin-left: 20px;
`
export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const NavListItem = styled.li`
  padding: 5px 0;
  display: flex;
  flex-direction: row;
`
export const NavListItemImage = styled.img`
  padding-top: 5px;
  padding-right: 7px;
`
export const NavListItemText = styled.span`
  padding-top: 8px;
`