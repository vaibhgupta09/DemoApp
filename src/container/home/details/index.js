// @ts-nocheck
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DetailsComponent from '../../../component/home/details';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <DetailsComponent
        nav={navigation}
        data={navigation.state.params.incidentData}
      />
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Details);
