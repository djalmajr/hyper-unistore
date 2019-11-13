# hyper-unistore

A [unistore](https://github.com/developit/unistore) connector to [hyperhtml](https://github.com/WebReflection/hyperhtml).

## Examples

- [TodoNever](https://codesandbox.io/s/todonever-13y11xkrkj) - A [TodoMVC](http://todomvc.com/) app using [neverland](https://github.com/WebReflection/neverland).

## Usage

#### store.js

```javascript
import connectTo from 'hyper-unistore';

export const store = createStore({
  list: [
    { id: 1, text: 'Do the thing!' },
    { id: 2, text: 'Do another thing!' },
  ],
});

export const connect = connectTo(store);
```

#### app.js

```javascript
import { connect } from './store';

const mapStateToProps = state => ({
  myList: state.list,
});

export const App = connect(mapStateToProps)(
  ({ myList }) => html`
    <ul>
      ${myList.map(
        item =>
          html`
            <li>${item.id} - ${item.text}</li>
          `
      )}
    </ul>
  `
);
```

#### index.js

```javascript
import { render } from 'lighterhtml';
import { store } from './store';
import { App } from './app';

const renderApp = () => render(document.body, App);

renderApp() && store.subscribe(renderApp);
```
