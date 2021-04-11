import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

class Home extends React.Component {

  render() {
    var {history} = this.props;
    history.push("/login");
    return (
      <div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
