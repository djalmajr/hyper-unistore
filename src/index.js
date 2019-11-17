import { mapActions, select } from 'unistore/src/util';

export default store => (mapStateToProps, mapDispatchToProps) => {
  if (typeof mapStateToProps !== 'function') {
    mapStateToProps = select(mapStateToProps || []);
  }

  return Child => props => {
    const state = mapStateToProps(store.getState(), props);
    const actions = mapDispatchToProps
      ? mapActions(mapDispatchToProps, store)
      : { store };

    return Child(Object.assign({}, actions, props, state));
  };
};
