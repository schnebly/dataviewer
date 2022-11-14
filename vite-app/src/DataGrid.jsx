import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataTable(props) {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.cols}
        // pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.numOrders || row.month}
        // checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
