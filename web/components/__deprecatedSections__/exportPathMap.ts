// import { sanity } from './sanity';

// export const exportPathMap = async () =>
//   sanity
//     .fetch(
//       `{
// "routes": *[_type == "route"] {
//   ...,
//   disallowRobot,
//   includeInSitemap,
//   page->{
//     _id,
//     title,
//     _createdAt,
//     _updatedAt
//   }}
// }`
//     )
//     .then(({ routes = [] }) => ({
//       // Generate Routes for Next from those imported from Sanity
//       ...routes.reduce((acc, { page = {}, slug = {}, includeInSitemap, disallowRobot }) => {
//         if (slug.current) {
//           const { _createdAt, _updatedAt } = page;
//           const path = slug.current === '/' ? '/' : `/${slug.current}`;
//           acc[path] = {
//             _createdAt,
//             _updatedAt,
//             disallowRobot,
//             includeInSitemap,
//             page: '/LandingPage',
//             query: { slug: slug.current },
//           };
//         }
//         return acc;
//       }, {}),
//       '/custom-page': { page: '/CustomPage' },
//     }));
