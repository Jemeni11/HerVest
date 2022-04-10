import styled from 'styled-components'

export const HeaderContainer = styled.section`
  padding: 20px;  
`
export const UserInfo = styled.div`
  display: flex;
  * {
    font-weight: bold;
  }
`
export const UserInfoImage = styled.img`
  border-radius: 5px;
  height: 50px;
`
export const UserInfoGreeting = styled.div`
  * {margin: 0; padding: 0}
`
export const UserInfoText= styled.p`
  margin-top: ${({position}) => position === 'top' ? '3px' : position === 'bottom' ? '7px' : 0};
  margin-left: 6px;
  opacity: ${({position}) => position === 'top' ? 0.6 : 1};
  color: ${({position}) => position === 'bottom ' ? '#7C7F92' : 'grey'};
`
export const Banner = styled.div`
  background-color: #C86E8E;
  border-radius: 5px;
  border-color: none;
  height: 160px;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const BannerTextTitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: lighter;
`
export const BannerMoney = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bolder;
  letter-spacing: 2px;
`