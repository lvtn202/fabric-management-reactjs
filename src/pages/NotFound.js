import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const NotFoundStyle = styled.div`
  padding: 40px 15px;
  text-align: center;
`;

class NotFound extends React.Component {
  render() {
    return (
      <div class="col-md-12">
        <NotFoundStyle>
          <div>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </NotFoundStyle>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
