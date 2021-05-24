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
import { currencyFormat, parseTimestamp } from "../../commons/utils";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "dyehouseName", headerName: "Xưởng", flex: 1 },
  {
    field: "money",
    headerName: "Tổng tiền (VNĐ)",
    flex: 1,
    valueFormatter: ({ value }) => currencyFormat(value),
  },
  {
    field: "returnDate",
    headerName: "Ngày tạo",
    flex: 1,
    valueFormatter: ({ value }) => parseTimestamp(value),
  },
  {
    field: "employee",
    headerName: "Nhân viên tạo",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
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
          history.push(`/recall/${newSelection.selectionModel[0]}`)
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
