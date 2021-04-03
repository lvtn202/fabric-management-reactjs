import React from 'react'
import { connect } from 'react-redux'

class Component extends React.Component {
    render() {
        return(
            <div>Sample Page</div>
        )
    }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Component)
