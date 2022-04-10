import HerVestLogo from '../../images/HerVest.png'
import { Nav, NavList, NavListItem, NavListItemImage, NavListItemText, NavLogo, NavMenuText, NavSection } from './NavigationStyles'

export default function Navigation() {
  const menuItem = [
    {key: 1, itemName: "Dashboard"},
    {key: 2, itemName: "Plans"},
    {key: 3, itemName: "Purse"},
    {key: 4, itemName: "Transactions"},
    {key: 5, itemName: "Banks & Cards"},
    {key: 6, itemName: "Girl Code"},
    {key: 7, itemName: "Profile"},
    {key: 8, itemName: "Portfolio"},
    {key: 9, itemName: "About HerVest"},
    {key: 10, itemName: "Support"},
    {key: 11, itemName: "Logout"},
  ]

  return(
    <NavSection>
      <NavLogo src={HerVestLogo} alt='logo'/>
      <NavMenuText>MENU</NavMenuText>
      <Nav>
        <NavList>
          {menuItem.map(({key, itemName}) => 
            <NavListItem key={key}>
              <NavListItemImage 
                src={'./src/images/NavigationImages/' + itemName + '.png'} 
                alt={itemName + 'icon'}
              />
              <NavListItemText>{itemName}</NavListItemText>
            </NavListItem>
          )}
        </NavList>
      </Nav>
    </NavSection>
  )
};
