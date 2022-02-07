import groq from 'groq';

const ACCORDION_LIST = groq`
    _type == "accordionList" => {
      ...,
      sectionTitle{
        ...,
        description[] {
          ...,
          markDefs[] {
            ...,
            "download": download.asset->{url},
            internalLink->{slug}
          }
        },
        ctaList[] {
          ...,
          link {
            ...,
            "download": download.asset->{url},
            internalLink->{slug}
          }
        }
      },
      items[]{
        ...,
        content[]{
          ...,
          markDefs[] {
            ...,
            "download": download.asset->{url},
            internalLink->{slug}
          }
        }
      }
    }
`;

const CARDS_DUAL = groq`
  _type == "cardsDual" => {
    ...,
    sectionTitle{
      ...,
      description[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    },
    cards[] {
      ...,
      simpleCardText{
        ...,
        summary[] {
          ...,
          markDefs[] {
            ...,
            "download": download.asset->{url},
            internalLink->{slug}
          }
        }
      }
    }
  }
`;

const CAROUSEL = groq`
  _type == "carousel" => {
    ...,
    title{
      ...,
      description[] {
        ...,
      },
    },
    content[] {
      ...,
      cta {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaSubtext[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const CARDS_TEXT_GRID = groq`
  _type == "cardsTextGrid" => {
    ...,
    sectionTitle{
      ...,
      description[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    },
    cards[] {
      ...,
      cta {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const CARDS_WIDE_LIST = groq`
  _type == "cardsWideList" => {
    ...,
    textBlock {
      ...,
      description[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    },
    contentCards[] {
      ...,
      cardText {
        ...,
        cta {
          ...,
          link {
            ...,
            "download": download.asset->{url},
            internalLink->{slug}
          }
        }
      }
    }
  }
`;

const CITIES_GALLERY = groq`
  _type == "citiesGallery" => {
    ...,
    cities[] -> {
      ...,
      description[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    },
    sectionTitle{
      ...,
      description[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const HERO_COLLAGE = groq`
  _type == "heroCollage" => {
    ...,
    primaryCta {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    },
    secondaryCta {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    }
  }
`;

const HERO_LARGE_CARD = groq`
  _type == "heroLargeCard" => {
    ...,
    titleBlock{
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const MAP_PROMOTION = groq`
  _type == "mapPromotion" => {
    ...,
    cta {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    },
    ctaSubtext[] {
      ...,
      markDefs[] {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    }
  }
`;

const NEWS_PROMOTION = groq`
  _type == "newsPromotion" => {
    ...,
    content[] {
      ...,
      linkButton {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const PROMO_SPONSORS = groq`
  _type == "promoSponsors" => {
    ...,
    sponsorGroup -> {..., sponsors[] -> },
    textBlock{
      ...,
      description[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const PROMO_TEXT = groq`
  _type == "promoText" => {
    ...,
    content{
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const SPONSORS_REEL = groq`
  _type == "sponsorsReel" => {
    ...,
    sponsorGroup -> {..., sponsors[] -> },
    primaryCta {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    },
    secondaryCta {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    }
  }
`;

const STATS_PROMOTION = groq`
  _type == "statsPromotion" => {
    ...,
    backstory[] {
      ...,
      markDefs[] {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    },
    cta {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    }
  }
`;

const TEAM_GALLERY = groq`
  _type == "teamGallery" => {
    ...,
    team -> {..., members[]->},
    textBlock {
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const TWIN_BACKGROUND_BAND = groq`
  _type == "twinBackgroundBand" => {
    ...,
    textBlock {
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const TWIN_CARD_WITH_COLLAGE = groq`
  _type == "twinCardWithCollage" => {
    ...,
    textBlock {
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

const TWIN_OVERLAPPED_CARDS = groq`
  _type == "twinOverlappedCards" => {
    ...,
    textBlock {
      ...,
      body[] {
        ...,
        markDefs[] {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      },
      ctaList[] {
        ...,
        link {
          ...,
          "download": download.asset->{url},
          internalLink->{slug}
        }
      }
    }
  }
`;

export const expandedSectionsQuery = groq`
  'content': content[]{
    ...,
    ${ACCORDION_LIST},
    ${CARDS_DUAL},
    ${CARDS_TEXT_GRID},
    ${CARDS_WIDE_LIST},
    ${CITIES_GALLERY},
    ${HERO_COLLAGE},
    ${HERO_LARGE_CARD},
    ${CAROUSEL},
    ${MAP_PROMOTION},
    ${NEWS_PROMOTION},
    ${PROMO_SPONSORS},
    ${PROMO_TEXT},
    ${SPONSORS_REEL},
    ${STATS_PROMOTION},
    ${TEAM_GALLERY},
    ${TWIN_BACKGROUND_BAND},
    ${TWIN_CARD_WITH_COLLAGE},
    ${TWIN_OVERLAPPED_CARDS}
  }
`;
