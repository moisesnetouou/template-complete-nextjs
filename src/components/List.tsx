import { Item, ListUl } from './styles';

export function List() {
  return (
    <ListUl>
      <Item>1</Item>
      <Item>2</Item>

      <Item>
        <div>
          <h1>ola</h1>
        </div>
      </Item>
    </ListUl>
  );
}
