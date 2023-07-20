import { styled } from '@/styles';

export const ListUl = styled('ul', {
  backgroundColor: '#000',
  width: '200px',
});

export const Item = styled('li', {
  color: '$blue600',

  div: {
    h1: {
      color: '$red600',
    },
  },
});
