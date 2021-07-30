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
import { parseTimestamp, numberFormat } from "../../commons/utils";
import { statusDescription } from "../../constants/order_status_type";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "dyehouse",
    headerName: "Xưởng",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "createDate",
    headerName: "Ngày đặt",
    headerAlign: "center",
    align: "center",
    flex: 1,
    valueFormatter: ({ value }) => parseTimestamp(value),
  },
  {
    field: "type",
    headerName: "Loại vải",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "color",
    headerName: "Màu",
    flex: 1,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "orderLength",
    headerName: "Độ dài đặt hàng (m)",
    flex: 1,
    type: "number",
    headerAlign: "center",
    valueFormatter: ({ value }) => numberFormat(value),
  },
  {
    field: "doneLength",
    headerName: "Đã nhận (m)",
    flex: 1,
    type: "number",
    headerAlign: "center",
    valueFormatter: ({ value }) => numberFormat(value),
  },
  {
    field: "status",
    headerName: "Trạng thái",
    headerAlign: "center",
    align: "center",
    flex: 1,
    renderCell: ({ value }) => statusDescription(value),
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

export default function DataGridDemo(props) {
  const { data, history } = props;
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        pagination
        autoHeight
        onSelectionModelChange={(newSelection) =>
          history.push(`/order/detail/${newSelection.selectionModel[0]}`)
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
