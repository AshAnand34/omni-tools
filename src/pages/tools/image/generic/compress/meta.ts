import { defineTool } from '@tools/defineTool';
import { lazy } from 'react';

export const tool = defineTool('image-generic', {
  i18n: {
    name: 'image:compress.title',
    description: 'image:compress.description',
    shortDescription: 'image:compress.shortDescription'
  },

  path: 'compress',
  component: lazy(() => import('./index')),
  icon: 'material-symbols-light:compress-rounded',

  keywords: ['image', 'compress', 'reduce', 'quality']
});
