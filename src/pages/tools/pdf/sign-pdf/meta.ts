import { defineTool } from '@tools/defineTool';
import { lazy } from 'react';

export const tool = defineTool('pdf', {
  name: 'Sign pdf',
  path: 'sign-pdf',
  icon: '',
  description: '',
  shortDescription: '',
  keywords: ['sign', 'pdf'],
  longDescription: '',
  component: lazy(() => import('./index'))
});
