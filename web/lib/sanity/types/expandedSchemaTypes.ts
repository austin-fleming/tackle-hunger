import type * as Schema from 'types/generated/schema';

/*
===============
Expanded type definitions to reflect reference projections
===============
*/

type Link = Omit<Schema.Link, 'internalLink' | 'download'> & {
  download?: {
    url: string;
  };
  internalLink?: {
    slug: {
      current: string;
    };
  };
};

export type ContentCard = Omit<Schema.ContentCard, 'linkButton'> & {
  linkButton?: CtaButton;
};

export type CtaButton = Omit<Schema.CtaButton, 'link'> & {
  link: Link;
};

export type CardText = Omit<Schema.CardText, 'cta'> & {
  cta?: CtaButton;
};

export type SimplePortableText = Omit<Schema.SimplePortableText, 'markDefs'> &
  Array<{
    markDefs?: [
      {
        download?: {
          url: string;
        };
        internalLink?: {
          slug: {
            current: string;
          };
        };
      }
    ];
  }>;

export type SimpleCardText = Omit<Schema.SimpleCardText, 'summary'> & {
  summary?: SimplePortableText;
};

export type SectionTitle = Omit<Schema.SectionTitle, 'description' | 'ctaList'> & {
  ctaList?: CtaButton[];
  description?: SimplePortableText;
};

export type InfoText = Omit<Schema.InfoText, 'body' | 'ctaList'> & {
  body?: SimplePortableText;
  ctaList?: CtaButton[];
};

// ACCORDION LIST
type AccordionItem = Omit<Schema.AccordionItem, 'content'> & {
  content: SimplePortableText;
};

export type AccordionList = Omit<Schema.AccordionList, 'sectionTitle' | 'items'> & {
  items: AccordionItem[];
  sectionTitle: SectionTitle;
};

// ARTICLE TEXT
export type ArticleText = Omit<Schema.ArticleText, 'sectionTitle' | 'body'> & {
  body: SimplePortableText;
  sectionTitle: SectionTitle;
};

// CARDS DUAL
type CardsDualCard = Omit<Schema.CardsDual['cards'][number], 'simpleCardText'> & {
  simpleCardText?: SimpleCardText;
};

export type CardsDual = Omit<Schema.CardsDual, 'sectionTitle' | 'cards'> & {
  cards: CardsDualCard[];
  sectionTitle: SectionTitle;
};

// CAROUSEL

export type Carousel = {
  content: (CarouselItem & { _key: string })[];
  title: SectionTitle;
};

export type CarouselItem = Omit<Schema.CarouselItem, 'cta' | 'ctaSubtext'> & {
  cta?: CtaButton;
  ctaSubtext?: SimplePortableText;
};

// CARDS TEXT GRID
export type CardsTextGrid = Omit<Schema.CardsTextGrid, 'cards' | 'sectionTitle'> & {
  cards: CardText[];
  sectionTitle: SectionTitle;
};

// CARDS WIDE LIST
export type CardsWideList = Omit<Schema.CardsWideList, 'textBlock' | 'contentCards'> & {
  contentCards: [
    {
      cardText: CardText;
      image: Schema.SimpleImage;
    }
  ];
  textBlock: SectionTitle;
};

// CITIES GALLERY
type City = Omit<Schema.City, 'description'> & {
  description?: SimplePortableText;
};

export type CitiesGallery = Omit<Schema.CitiesGallery, 'cities' | 'sectionTitle'> & {
  cities: City[];
  sectionTitle: SectionTitle;
};

// HERO COLLAGE
export type HeroCollage = Omit<Schema.HeroCollage, 'primaryCta' | 'secondaryCta'> & {
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
};

// HERO LARGE CARD
export type HeroLargeCard = Omit<Schema.HeroLargeCard, 'titleBlock'> & {
  titleBlock?: SectionTitle;
};

// MAP PROMOTION
export type MapPromotion = Omit<Schema.MapPromotion, 'cta' | 'ctaSubtext'> & {
  cta?: CtaButton;
  ctaSubtext?: SimplePortableText;
};

// NEWS PROMOTION
export type NewsPromotion = Omit<Schema.NewsPromotion, 'content'> & {
  content?: ContentCard[];
};

// PROMO SPONSORS
type SponsorGroups = Omit<Schema.SponsorGroups, 'sponsors'> & {
  sponsors: Schema.Sponsor[];
};
export type PromoSponsors = Omit<Schema.PromoSponsors, 'sponsorGroup' | 'textBlock'> & {
  sponsorGroup: SponsorGroups;
  textBlock: SectionTitle;
};

// PROMO TEXT
export type PromoText = Omit<Schema.PromoText, 'content'> & {
  content: InfoText;
};

// SPONSORS REEL
export type SponsorsReel = Omit<
  Schema.SponsorsReel,
  'sponsorGroup' | 'primaryCta' | 'secondaryCta'
> & {
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
  sponsorGroup: SponsorGroups;
};

// STATS PROMOTION
export type StatsPromotion = Omit<Schema.StatsPromotion, 'backstory' | 'cta'> & {
  backstory?: SimplePortableText;
  cta?: CtaButton;
};

// TEAM GALLERY
type Teams = Omit<Schema.Teams, 'members'> & {
  members: Schema.TeamMember[];
};

export type TeamGallery = Omit<Schema.TeamGallery, 'team' | 'textBlock'> & {
  team: Teams;
  textBlock: SectionTitle;
};

// TWIN BACKGROUND BAND
export type TwinBackgroundBand = Omit<Schema.TwinBackgroundBand, 'textBlock'> & {
  textBlock: InfoText;
};

// TWIN CARD WITH COLLAGE
export type TwinCardWithCollage = Omit<Schema.TwinCardWithCollage, 'textBlock'> & {
  textBlock: InfoText;
};

// TWIN OVERLAPPED CARDS
export type TwinOverlappedCards = Omit<Schema.TwinOverlappedCards, 'textBlock'> & {
  textBlock: InfoText;
};

// SECTIONS
type Section = (
  | AccordionList
  | ArticleText
  | CardsDual
  | CardsTextGrid
  | CardsWideList
  | Carousel
  | CitiesGallery
  | HeroCollage
  | HeroLargeCard
  | Schema.IframePage
  | MapPromotion
  | NewsPromotion
  | PromoSponsors
  | PromoText
  | SponsorsReel
  | StatsPromotion
  | TeamGallery
  | TwinBackgroundBand
  | TwinCardWithCollage
  | TwinOverlappedCards
  | Schema.CollageDivider
) & { _type: string };

// PAGE
export type Page = Omit<Schema.Page, 'content'> & {
  content: Section[];
};

// HOME
export type HomePageSingleton = Omit<Schema.HomePageSingleton, 'content'> & {
  content: Section[];
};

type MainNavigation = Omit<
  Schema.SiteConfigSingleton['mainNavigation'],
  'primaryNavigationItem' | 'secondaryNavigationItems'
> & {
  primaryNavigationItem: CtaButton;
  secondaryNavigationItems: CtaButton[];
};

type Footer = Omit<Schema.SiteConfigSingleton['defaultFooter'], 'footerNavigation'> & {
  footerNavigation: CtaButton[];
};

// SITE CONFIG
export type SiteConfigSingleton = Omit<
  Schema.SiteConfigSingleton,
  'mainNavigation' | 'defaultFooter'
> & {
  defaultFooter: Footer;
  mainNavigation: MainNavigation[];
};
