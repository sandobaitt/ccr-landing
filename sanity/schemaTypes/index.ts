import { type SchemaTypeDefinition } from 'sanity'
import { communityType } from './community'
import { newsType } from './news'
import { retreatType } from './retreat'
import { saintType } from './saint'
import { socialType } from './social'
import scheduleItem from './scheduleItem'
import pillar from './pillar'
import supplyItem from './supplyItem'
import coordinator from './coordinator'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [communityType, newsType, retreatType, saintType, socialType, scheduleItem, pillar, supplyItem, coordinator],
}
