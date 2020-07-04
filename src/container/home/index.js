// @ts-nocheck
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getIncident } from '../../actions/app';
import IncidentsComponent from '../../component/home';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      data: [],
      loadingMore: false,
    };
  }
  componentDidMount() {
    this._fetchData();
  }
  _fetchData = async () => {
    const {page} = this.state;
    await this.props.getIncident(page);

  };
  
  onRowPressed = value => {
    this.props.navigation.navigate('Details', {
      incidentData: value,
    });
  };
  render() {
    const {incidentData, loading} = this.props;
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <IncidentsComponent
        incidentData={incidentData}
        loading={loading}
        onRowPressed={this.onRowPressed}
      />
    );
  }
}
const mapStateToProps = state => ({
  loading: state.appReducer.incidentLoading,
  incidentData: state.appReducer.incidentData,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getIncident,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Home);
