import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import DataGridTable from "./table";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import * as orderAction from "../../actions/order";

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  listOrder: state.order.listOrder,
});

const mapDispatchToProps = (dispatch) => ({
  orderAction: bindActionCreators(orderAction, dispatch),
});

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  componentDidMount() {
    const { orderAction } = this.props;
    const { getListOrderRequest } = orderAction;
    getListOrderRequest(-1);
  }

  render() {
    const { classes, listOrder, history } = this.props;

    // const handleClick = (event, id) => {
    //   history.push(`/order/detail/${id}`);
    // };

    // const handleSearch = (ev) => {
    //   ev.preventDefault();
    //   this.props.orderAction.getListOrderRequest(this.state.keyword);
    // };

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách đơn đặt hàng
        </Typography>
        <Divider className={classes.divider} />

        <div className={classes.tableContainer}>
          <DataGridTable data={listOrder} history={history} />
        </div>

        {/* <Paper
          component="form"
          className={classes.root}
          onSubmit={handleSearch}
        >
          <InputBase
            className={classes.input}
            placeholder="Tìm tên xưởng, loại vải"
            inputProps={{ "aria-label": "search order" }}
            onChange={(ev) => this.setState({ keyword: ev.target.value })}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper> */}
      </React.Fragment>
    );
  }
}

Order.propTypes = {
  classes: PropTypes.object,
  orderAction: PropTypes.shape({
    getListOrderRequest: PropTypes.func,
  }),
  listOrder: PropTypes.array,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Order);
