import S from '@sanity/desk-tool/structure-builder';
import { BsLayoutWtf } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdDashboard, MdHome, MdSettings, MdPerson, MdPeople } from 'react-icons/md';

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem: any) =>
  ![
    'siteConfigSingleton',
    'homePageSingleton',
    'sponsor',
    'sponsorGroups',
    'page',
    'teamMember',
    'teams',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site Config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('siteConfigSingleton')
            .documentId('site-config')
            .title('Site Config')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDashboard)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .icon(MdHome)
                .child(
                  S.editor()
                    .id('config')
                    .schemaType('homePageSingleton')
                    .documentId('home-page')
                    .title('Home Page')
                ),
              S.listItem()
                .title('Page Builder')
                .icon(BsLayoutWtf)
                .child(S.documentList().title('Pages').filter("_type == 'page'")),
            ])
        ),
      S.listItem()
        .title('Sponsors')
        .icon(GiReceiveMoney)
        .child(
          S.list()
            .title('Sponsors')
            .items([
              S.listItem()
                .title('Sponsors')
                .icon(MdPerson)
                .child(S.documentList().title('Sponsors').filter("_type == 'sponsor'")),
              S.listItem()
                .title('Sponsor Group')
                .icon(MdPeople)
                .child(S.documentList().title('Sponsor Groups').filter("_type == 'sponsorGroups'")),
            ])
        ),
      S.listItem()
        .title('Team Members')
        .icon(MdPeople)
        .child(
          S.list()
            .title('Team Members')
            .items([
              S.listItem()
                .title('Members')
                .icon(MdPerson)
                .child(S.documentList().title('Members').filter("_type == 'teamMember'")),
              S.listItem()
                .title('Teams')
                .icon(MdPeople)
                .child(S.documentList().title('Teams').filter("_type == 'teams'")),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
