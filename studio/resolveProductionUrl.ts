const resolveProductionUrl = (document: any): string =>
  `http://localhost:3000/preview/${document.slug.current}`;

export default resolveProductionUrl;
