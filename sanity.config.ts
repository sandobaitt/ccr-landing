import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schemaTypes';
import { projectId, dataset } from './sanity/env';

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  title: 'CCR CMS',
  schema,
  plugins: [
    structureTool(),
  ],
});
