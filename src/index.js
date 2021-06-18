import { mapActions, select } from 'unistore/src/util';

const { assign, keys } = Object;

export default (store) => (mapStateToProps, mapDispatchToProps) => {
  if (typeof mapStateToProps !== 'function') {
    mapStateToProps = select(mapStateToProps || keys(store.getState()));
  }

  return (Child) => (props) => {
    const state = mapStateToProps(store.getState(), props);
    const actions = mapDispatchToProps
      ? mapActions(mapDispatchToProps, store)
      : { store };

    return Child(assign({}, actions, props, state));
  };
};
