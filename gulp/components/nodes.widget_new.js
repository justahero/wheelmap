const React = require('react');
const { connect } = require('react-redux');
const Header = require('./nodes.widget_new.header');
const Breadcrumbs = require('./nodes.widget_new.breadcrumbs');
const Content = require('./nodes.widget_new.content');
const { start, activateSection, activateNextSection } = require('../reducers/nodes.widget_new');

class Widget extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    let { sections, activeSection, onClickSection, onClickNext } = this.props;

    return (
      <div className="nodes-new">
        <Header/>
        <Breadcrumbs sections={sections} onClickSection={onClickSection}/>
        <Content sections={sections} onClickNext={onClickNext} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  let sections = state.get('sections');

  return {
    sections: sections,
    activeSection: sections.find(section => section.active)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => dispatch(start()),
    onClickSection: (section) => dispatch(activateSection(section)),
    onClickNext: (section) => dispatch(activateNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);