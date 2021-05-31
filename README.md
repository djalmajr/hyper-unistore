# unistore-lit

[unistore](https://github.com/developit/unistore) connector to [lit](https://lit.dev/) and [uhtml](https://github.com/WebReflection/hyperhtml) (and any tagged template library).

## Examples

- [Todo](https://codesandbox.io/s/todonever-13y11xkrkj) - A [TodoMVC](http://todomvc.com/) app using [neverland](https://github.com/WebReflection/neverland).
- [Tunes](https://codesandbox.io/s/5zlnjwyz8l) - A Peepcode's Backbone.js Music Player reimplemented in [lighterhtml](https://github.com/WebReflection/lighterhtml).
- [TunesLit](https://codesandbox.io/s/tuneslit-dkczj) - A Peepcode's Backbone.js Music Player reimplemented in [lit-html](https://github.com/polymer/lit-html).

## Usage

#### store.js

```javascript
import createStore from 'unistore';
import connectTo from 'unistore-lit';

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

const mapStateToProps = (state) => ({
  myList: state.list,
});

export const App = connect(mapStateToProps)(
  ({ myList }) => html`
    <ul>
      ${myList.map((item) => html`<li>${item.id} - ${item.text}</li>`)}
    </ul>
  `
);
```

#### index.js

```javascript
import { render } from 'lit'; // or 'uhtml'
import { store } from './store';
import { App } from './app';

const renderApp = () => render(App(), document.body);

renderApp() && store.subscribe(renderApp);
```
