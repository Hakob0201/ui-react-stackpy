import React from 'react';
import { Box } from '../Box';
import { Image } from './Image';

export default {
   title: 'Components/Image',
   component: Image,
};

const src =
   'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/media/images/Blog/teaching-school-administration/femaleteacher_0.jpg';

export const Default = () => <Image src={src} />;
