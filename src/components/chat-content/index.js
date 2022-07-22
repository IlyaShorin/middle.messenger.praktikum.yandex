import Handlebars from 'handlebars';
import tmpl from 'bundle-text:./tmpl.hbs';
import * as styles from './index.module.less';

Handlebars.registerPartial('chatContent', tmpl);

const messages = [
  {
    yourMessage: false,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempore corporis dolorum placeat quae sint ut laborum expedita mollitia dolorem porro odio quibusdam ipsam maxime neque quidem suscipit molestiae id itaque inventore odit quod perferendis modi? Unde mollitia quibusdam quasi cumque dolorem dolores, impedit blanditiis aut est incidunt quae recusandae.',
  },
  {
    yourMessage: false,
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempore corporis dolorum placeat quae sint ut laborum expedita mollitia dolorem porro odio quibusdam ipsam maxime neque quidem suscipit molestiae id itaque inventore odit quod perferendis modi? Unde mollitia quibusdam quasi cumque dolorem dolores, impedit blanditiis aut est incidunt quae recusandae.',
  },
  {
    yourMessage: true,
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate accusantium harum numquam nisi, dicta voluptatem rerum asperiores aliquid saepe consectetur?',
  },
  {
    yourMessage: true,
    text: 'Hello world',
  },
];

export default () => {
  return Handlebars.compile(tmpl)({
    messages: messages,
    styles,
  });
};
