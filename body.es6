import ArticleBodyTemplate from '@economist/component-articletemplate/body';
import AdvertisementPanel from '@economist/component-ad-panel';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';
import { Country } from '@economist/component-win-stats-container';
import Industry from './industry';
import { createVariant } from '@economist/component-variantify';

const innerArticleBodyComponents = {
  AdvertisementPanel,
  ImageCaption,
  Video,
};

const StandardArticleBody = createVariant(
  innerArticleBodyComponents
)(ArticleBodyTemplate);
const WorldInNumbersArticleBody = createVariant({
  ...innerArticleBodyComponents,
  Country,
  Industry,
})(ArticleBodyTemplate);
const WorldIfArticleBody = createVariant(
  innerArticleBodyComponents
)(ArticleBodyTemplate);
export { StandardArticleBody, WorldInNumbersArticleBody, WorldIfArticleBody };
