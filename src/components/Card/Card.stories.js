import React from 'react';
import { Box } from '../Box';
import { Row, Col } from '../Grid';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
import { CardImage } from './CardImage';

export default {
   title: 'Components/Card',
   component: Card,
   subcomponents: { CardImage, CardHeader, CardContent, CardFooter },
};

const content =
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
const imageSrc =
   'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/media/images/Blog/teaching-school-administration/femaleteacher_0.jpg';

export const Default = () => (
   <Row justify={'center'} spaceAfter={0}>
      <Col span={6} xs={10}>
         <Card>
            <CardImage src={imageSrc} />
            <CardHeader>Card Header</CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>Card Footer</CardFooter>
         </Card>
      </Col>
   </Row>
);

export const DefaultVariant = () => (
   <Row justify={'center'} spaceAfter={0}>
      <Col span={6} xs={10}>
         <Card header={'Card Header'} footer={'Card Footer'} image={imageSrc}>
            {content}
         </Card>
      </Col>
   </Row>
);

export const Align = () => (
   <Row justify={'center'} spaceAfter={0}>
      <Col span={4} xs={10}>
         <Card header={'Left Align'} align={'left'} spaceAfter={20}>
            {content}
         </Card>
      </Col>
      <Col span={4} xs={10}>
         <Card header={'Center Align'} align={'center'} spaceAfter={20}>
            {content}
         </Card>
      </Col>
      <Col span={4} xs={10}>
         <Card header={'Right Align'} align={'right'} spaceAfter={20}>
            {content}
         </Card>
      </Col>
   </Row>
);
