import type { GenericCalcType } from './types';

const slackline: GenericCalcType = {
  icon: 'mdi:bridge',
  keywords: [
    'mechanical',
    'rope',
    'webbing',
    'cord',
    'string',
    'tension',
    'clothesline'
  ],
  path: 'slackline-tension',
  formula: 'T = (W * sqrt((S**2) + ((L/2)**2)) )/ (2S)',
  presets: [],
  i18n: {
    name: 'number:slackline.title',
    description: 'number:slackline.description',
    shortDescription: 'number:slackline.shortDescription',
    longDescription: 'number:slackline.longDescription'
  },
  variables: [
    {
      name: 'L',
      title: 'Length',
      unit: 'meter',
      default: 2
    },
    {
      name: 'W',
      title: 'Weight',
      unit: 'pound',
      default: 1
    },
    {
      name: 'S',
      title: 'Sag/Deflection',
      unit: 'meter',
      default: 0.05
    },
    {
      name: 'T',
      title: 'Tension',
      unit: 'pound-force'
    }
  ]
};

export default slackline;
