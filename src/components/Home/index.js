import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

class Home extends React.Component {
  render() {
    return (
      <div className="dye-plant">
        <h1>HOME</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
