import { ContentArea, ContentCardImageArea, ContentCard, ContentCardBottomImage, ContentCardHorLine, ContentCardPrice, ContentContainer, ContentSubTitle, ContentTitle } from "./ContentStyles";
import cardImage1 from '../../images/main1.png'
import cardImage2 from '../../images/main2.png'
import cardImage3 from '../../images/main3.png'

export default function Content() {
  return(
    <ContentContainer>
      <ContentTitle>Watch your plans</ContentTitle>
      <ContentSubTitle>A goal without a plan is just a wish</ContentSubTitle>
      <ContentArea>
        {/* First Card */}
        <ContentCard>
          <ContentCardImageArea>
            <img></img>
            <img></img>
            <span>Saving for rainy days</span>
          </ContentCardImageArea>
          <ContentCardPrice></ContentCardPrice>
          <ContentCardHorLine />
          <ContentCardBottomImage src={cardImage1}/>
        </ContentCard>
        {/* Second Card */}
        <ContentCard>
          <ContentCardImageArea>
            <img></img>
            <img></img>
            <span></span>
          </ContentCardImageArea>
          <ContentCardPrice></ContentCardPrice>
          <ContentCardHorLine />
          <ContentCardBottomImage src={cardImage2}/>
        </ContentCard>
        {/* Third Card */}
        <ContentCard>
          <ContentCardImageArea>
            <img></img>
            <img></img>
            <span></span>
          </ContentCardImageArea>
          <ContentCardPrice></ContentCardPrice>
          <ContentCardHorLine />
          <ContentCardBottomImage src={cardImage3}/>
        </ContentCard>
        
      </ContentArea>
    </ContentContainer>
  )
};
