const { Map, List, fromJS } = require('immutable');
const { handleActions } = require('redux-actions');

const { NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } = require('../models/sections');
const actions = require('../actions');
const { FETCH_CATEGORIES } = require('../../common/actions/categories');
const Node = require('../../common/models/node');

const defaultNode = new Node();

const DEFAULT_STATE = Map({
  activeSection: null,
  sections: List([NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW]),
  node: defaultNode,
  mapCenter: { lat: 52.520007, lon: 13.404954 },
  mapZoom: 16,
  similarNodes: List(),
  errors: Map()
});

module.exports = handleActions({
  [actions.ACTIVATE_SECTION]: (state, { payload: activeSection }) => {
    const sections = state.get('sections'),
      section = sections.find(section => section.id === activeSection);

    return state.set('activeSection', section);
  },
  [actions.CHANGE_NODE]: (state, { payload: node}) => {
    return state.set('node', node);
  },
  [actions.CHANGE_MAP_CENTER]: (state, { payload: { lat, lon } }) => {
    return state.set('mapCenter', { lat, lon });
  },
  [actions.CHANGE_MAP_ZOOM]: (state, { payload: zoom }) => {
    return state.set('mapZoom', zoom);
  },
  [actions.SET_SIMILAR]: (state, { payload: similarNodes }) => {
    return state.set('similarNodes', List(similarNodes));
  },
  [actions.SET_ERRORS]: (state, { payload: errors }) => {
    return state.set('errors', fromJS(errors));
  }
}, DEFAULT_STATE);