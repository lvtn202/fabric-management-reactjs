import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Field, reduxForm, getFormValues } from "redux-form";
import AppSelectField from "../../components/form_helper/select_field";
import * as dyePlantAction from "../../actions/dye_plant";
import * as rawActions from "../../actions/raw";
import * as exportActions from "../../actions/export";
import { parseTimestamp } from "../../commons/utils";
import { CREATE_EXPORT_FORM } from "./../../constants/form_name";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { RAW } from "./../../constants/path"

class ExportRaw extends React.Component {
  constructor(props) {
    super(props);
    this.createDate = new Date().getTime();
    this.state = {
      currentRaw: "",
      currentListRaws: [],
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    const { dyePlantAction, rawActions } = this.props;
    const { getListDyePlantRequest } = dyePlantAction;
    const { getListFabricTypeRequest } = rawActions;
    getListDyePlantRequest();
    getListFabricTypeRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Tạo phiếu xuất vải mộc
        </Typography>
        <Divider />
        {this.renderForm()}
      </React.Fragment>
    );
  }

  renderForm() {
    const {
      classes,
      invalid,
      pristine,
      submitting,
      reset,
      listDyePlant,
      listFabricType,
      handleSubmit,
      formValues,
      exportActions,
      listRawExport,
    } = this.props;
    const { currentListRaws } = this.state;
    const { getListRawExportRequest } = exportActions;
    return (
      <form
        className={classes.root}
        onSubmit={handleSubmit(this.handleSubmitForm)}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Ngày</Box>
          </Grid>
          <Grid item xs>
            <Box fontWeight="normal" ml={1}>
              {parseTimestamp(this.createDate)}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Xưởng nhuộm</Box>
          </Grid>
          <Grid item xs>
            <Field
              className={classes.selectField}
              name="dyeplantId"
              component={AppSelectField}
              label="Chọn xưởng nhuộm"
            >
              {listDyePlant.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Field>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Loại vải</Box>
          </Grid>
          <Grid item xs>
            <Field
              className={classes.selectField}
              name="fabricType"
              component={AppSelectField}
              label="Chọn loại vải"
              onBlur={() => getListRawExportRequest(formValues.fabricType)}
            >
              {listFabricType.map((item, index) => (
                <MenuItem key={index} value={item.type}>
                  {item.type}
                </MenuItem>
              ))}
            </Field>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Mã cây vải</Box>
          </Grid>
          <Grid item xs>
            <Autocomplete
              id="rawId"
              name="rawId"
              clearOnBlur={true}
              onChange={(event, newValue) => {
                this.setState({ currentRaw: newValue });
              }}
              options={listRawExport.filter(
                (x) => !currentListRaws.includes(x)
              )}
              style={{ width: "80%" }}
              getOptionLabel={(option) => option.id.toString()}
              renderInput={(params) => (
                <TextField {...params} label="Mã cây vải" variant="outlined" />
              )}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} justify="center">
          <Box m={1}>
            <Button variant="contained" color="primary" onClick={this.add}>
              Thêm
            </Button>
          </Box>
        </Grid>

        <Grid container spacing={3} alignItems="center" justify="center">
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              stickyHeader
              className={classes.table}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Mã cây vải</TableCell>
                  <TableCell align="center">Độ dài&nbsp;(m)</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentListRaws.map((row, index) => (
                  <TableRow key={index} hover>
                    <TableCell align="center" component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.rawLength}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        aria-label="delete"
                        data-item={row}
                        onClick={() => this.remove(row)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item md={12}>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <Box mr={1}>
              <Button
                variant="contained"
                onClick={reset}
                disabled={submitting || pristine}
              >
                Hủy Bỏ
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={
                invalid || submitting || pristine || !currentListRaws.length
              }
            >
              Tạo
            </Button>
          </Box>
        </Grid>
      </form>
    );
  }

  add() {
    if (Object.keys(this.state.currentRaw).length !== 0)
      this.setState((prev) => ({
        currentListRaws: [...prev.currentListRaws, this.state.currentRaw],
        currentRaw: {},
      }));
  }

  remove = (item) => {
    console.log(item);
    this.setState((prev) => ({
      currentListRaws: prev.currentListRaws.filter((x) => x !== item),
    }));
  };

  handleSubmitForm = (data) => {
    const { history, exportActions, userId } = this.props;
    const { createExportRequest } = exportActions;
    const { dyeplantId, fabricType } = data;
    const finalListRaw = [];
    this.state.currentListRaws.map((item) => finalListRaw.push(item.id));
    let body = JSON.stringify({
      userId: userId,
      dyehouseId: dyeplantId,
      fabricType: fabricType,
      createDate: new Date().getTime(),
      listRaw: finalListRaw,
    });
    createExportRequest(body, () => {
      history.push(RAW);
    });
  };
}

const mapStateToProps = (state) => ({
  formValues: getFormValues(CREATE_EXPORT_FORM)(state),
  listDyePlant: state.dyeplant.listDyePlant,
  listFabricType: state.raw.listFabricType,
  listRawExport: state.exportRaw.listRawExport,
  userId: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  rawActions: bindActionCreators(rawActions, dispatch),
  exportActions: bindActionCreators(exportActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

ExportRaw.propTypes = {
  classes: PropTypes.object,
  formValues: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  dyePlantAction: PropTypes.shape({
    getListDyePlantRequest: PropTypes.func,
  }),
  listDyePlant: PropTypes.array,
  listFabricType: PropTypes.array,
  rawActions: PropTypes.shape({
    getListFabricTypeRequest: PropTypes.func,
  }),
  exportActions: PropTypes.shape({
    getListRawExportRequest: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: CREATE_EXPORT_FORM,
});

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(ExportRaw);
