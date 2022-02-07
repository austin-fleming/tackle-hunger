/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { SanityCodegenConfig } from 'sanity-codegen';
import { defaultBabelOptions } from 'sanity-codegen/cli';

const config: SanityCodegenConfig = {
  babelOptions: defaultBabelOptions,
  outputPath: './web/types/generated/schema.ts',
  schemaPath: './studio/schemas',
};

export default config;
