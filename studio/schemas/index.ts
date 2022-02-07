import schemaTypes from 'all:part:@sanity/base/schema-type'; // Plugins schema types
import createSchema from 'part:@sanity/base/schema-creator';
import city from './documents/city';
import homePageSingleton from './documents/homePageSingleton';
import page from './documents/page';
import siteConfigSingleton from './documents/siteConfigSingleton';
import sponsor from './documents/sponsor';
import teamMember from './documents/teamMember';
import accordionItem from './objects/accordionItem';
import cardText from './objects/cardText';
import carouselItem from './objects/carouselItem';
import contentCard from './objects/contentCard';
import ctaButton from './objects/ctaButton';
import defaultSeo from './objects/defaultSeo';
import figure from './objects/figure';
import footer from './objects/footer';
import infoText from './objects/infoText';
import internalLink from './objects/internalLink';
import link from './objects/link';
import notificationBanner from './objects/notificationBanner';
import sectionTitle from './objects/sectionTitle';
import seo from './objects/seo';
import simpleCardText from './objects/simpleCardText';
import simpleImage from './objects/simpleImage';
import simplePortableText from './objects/simplePortableText';
import socialMediaLink from './objects/socialMediaLink';
import urlLink from './objects/urlLink';
import accordionList from './sections/accordionList';
import articleText from './sections/articleText';
import cardsDual from './sections/cardsDual';
import cardsTextGrid from './sections/cardsTextGrid';
import cardsWideList from './sections/cardsWideList';
import carousel from './sections/carousel';
import citiesGallery from './sections/citiesGallery';
import collageDivider from './sections/collageDivider';
import heroCollage from './sections/heroCollage';
import heroLargeCard from './sections/heroLargeCard';
import iframePage from './sections/iframePage';
import mapPromotion from './sections/mapPromotion';
import newsPromotion from './sections/newsPromotion';
import pageSections from './sections/pageSections';
import promoSponsors from './sections/promoSponsors';
import promoText from './sections/promoText';
import sponsorsReel from './sections/sponsorsReel';
import statsPromotion from './sections/statsPromotion';
import teamGallery from './sections/teamGallery';
import twinBackgroundBand from './sections/twinBackgroundBand';
import twinCardWithCollage from './sections/twinCardWithCollage';
import twinOverlappedCards from './sections/twinOverlappedCards';
import sponsorGroups from './taxonomies/sponsorGroups';
import teams from './taxonomies/teams';

const documentSchemas = [sponsor, teamMember, page, city];

const singletonSchemas = [homePageSingleton, siteConfigSingleton];

const taxonomySchemas = [teams, sponsorGroups];

const objectSchemas = [
  cardText,
  socialMediaLink,
  simpleCardText,
  notificationBanner,
  contentCard,
  ctaButton,
  defaultSeo,
  figure,
  footer,
  infoText,
  internalLink,
  urlLink,
  link,
  sectionTitle,
  seo,
  simpleImage,
  simplePortableText,
  accordionItem,
  carouselItem,
];

const sectionSchemas = [
  iframePage,
  articleText,
  cardsTextGrid,
  cardsWideList,
  promoSponsors,
  twinCardWithCollage,
  accordionList,
  citiesGallery,
  collageDivider,
  heroCollage,
  mapPromotion,
  newsPromotion,
  pageSections,
  promoText,
  sponsorsReel,
  statsPromotion,
  teamGallery,
  twinBackgroundBand,
  twinOverlappedCards,
  heroLargeCard,
  cardsDual,
  carousel,
];

/* TODO: there are three types of portable text. Should only have 2: simple + article */
const builtSchema = createSchema({
  name: 'default',
  types: schemaTypes.concat([
    ...documentSchemas,
    ...singletonSchemas,
    ...taxonomySchemas,
    ...objectSchemas,
    ...sectionSchemas,
  ]),
});

export default builtSchema;
