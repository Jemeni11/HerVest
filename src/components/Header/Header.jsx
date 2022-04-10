import { HeaderContainer, UserInfo, Banner, BannerTextTitle, BannerMoney, UserInfoImage, UserInfoGreeting, UserInfoText } from "./HeaderStyles";
import user from '../../images/Ellipse 12.png'

export default function Header() {
  return(
    <HeaderContainer>
      <UserInfo>
        <UserInfoImage src={user} alt='User'/>
        <UserInfoGreeting>
          <UserInfoText position='top'>Hello</UserInfoText>
          <UserInfoText position='bottom'>Oluwatobi</UserInfoText>
        </UserInfoGreeting>
      </UserInfo>
      <Banner>
        <div>
          <BannerTextTitle>
            Available balance
          </BannerTextTitle>
          <BannerMoney>
            N1,063,345.04
          </BannerMoney>
        </div>
        <div>
          <BannerTextTitle>
            Impact Investments
          </BannerTextTitle>
          <BannerMoney>
            N1,007,345.04
          </BannerMoney>
        </div>
        <div>
          <BannerTextTitle>
            Total Savings
          </BannerTextTitle>
          <BannerMoney>
            N2,007,345.04
          </BannerMoney>
        </div>
        <div>
          <BannerTextTitle>
            Total Returns
          </BannerTextTitle>
          <BannerMoney>
            N56,000.00
          </BannerMoney>
        </div>
      </Banner>
    </HeaderContainer>
  )
};
