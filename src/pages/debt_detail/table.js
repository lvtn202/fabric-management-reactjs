import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  DataGrid,
  GridToolbarContainer,
  GridDensitySelector,
  useGridSlotComponentProps,
  GridFilterToolbarButton,
} from "@material-ui/data-grid";
import { Pagination } from "@material-ui/lab";
import { parseTimestamp } from "../../commons/utils";
import { DYE_BATCH, PAYMENT, RECALL } from "../../constants/path";
import { debtDescription, formatAmount } from "../../constants/debt_type";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "type",
    headerName: "Loại giao dịch",
    flex: 1,
    valueFormatter: ({ value }) => debtDescription(value),
  },
  {
    field: "amount",
    headerName: "Số tiền",
    align: "center",
    headerAlign: "center",
    flex: 1,
    type: "number",
    valueGetter: (params) => formatAmount(params.row),
  },
  {
    field: "createDate",
    headerName: "Ngày thực hiện",
    align: "center",
    headerAlign: "center",
    flex: 1,
    valueFormatter: ({ value }) => parseTimestamp(value),
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridDensitySelector />
      <GridFilterToolbarButton />
    </GridToolbarContainer>
  );
}

function CustomPagination() {
  const { state, apiRef } = useGridSlotComponentProps();
  const classes = useStyles();

  return (
    <Pagination
      className={classes.root}
      color="primary"
      count={state.pagination.pageCount}
      page={state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function onSelectRow(row, history) {
  var path = "";
  switch (row.type) {
    case 1:
      path = DYE_BATCH;
      break;
    case 2:
      path = RECALL;
      break;
    case 3:
      path = PAYMENT;
      break;
    default:
      break;
  }
  history.push(`${path}/${row.idTransaction}`);
}

export default function DataGridTable(props) {
  const { data, history } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        pagination
        autoHeight
        onSelectionModelChange={(newSelection) =>
          onSelectRow(
            data.find(
              (element) => element.id === newSelection.selectionModel[0]
            ),
            history
          )
        }
        components={{
          Toolbar: CustomToolbar,
          Pagination: CustomPagination,
        }}
        disableColumnMenu
        localeText={{
          noRowsLabel: "Không có kết quả nào.",
          footerRowSelected: () => "",
          toolbarDensity: "Độ dày",
          toolbarDensityLabel: "Độ dày",
          toolbarDensityCompact: "Dày",
          toolbarDensityStandard: "Bình thường",
          toolbarDensityComfortable: "Thưa",
          toolbarFilters: "Lọc",
          toolbarFiltersLabel: "Bộ lọc",
          toolbarFiltersTooltipHide: "Ẩn bộ lọc",
          toolbarFiltersTooltipShow: "Hiện bộ lọc",
        }}
      />
    </div>
  );
}
