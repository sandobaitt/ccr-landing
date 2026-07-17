import { type SchemaTypeDefinition } from 'sanity';
import { newsType } from './news';
import { communityType } from './community';
import { retreatType } from './retreat';
import { socialType } from './social';
import { saintType } from './saint';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsType, communityType, retreatType, socialType, saintType],
};
