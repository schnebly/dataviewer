import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DataGrid from './DataGrid';
import Charts from './Charts';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

const revColumns = [
  { field: 'month', headerName: 'Month', width: 100, sortable: false },
  {
    field: 'grossRevenue',
    headerName: 'Gross Revenue ($)',
    width: 160,
    type: 'number',
  },
];

const revRows = [
  { month: 'February', grossRevenue: 301000 },
  { month: 'March', grossRevenue: 308000 },
  { month: 'April', grossRevenue: 323000 },
  { month: 'May', grossRevenue: 329000 },
  { month: 'June', grossRevenue: 346000 },
  { month: 'July', grossRevenue: 374000 },
];

const orderColumns = [
  { field: 'month', headerName: 'Month', width: 100, sortable: false },
  {
    field: 'numOrders',
    headerName: 'Number of Orders',
    width: 160,
    type: 'number',
  },
];

const orderRows = [
  { month: 'February', numOrders: 25142 },
  { month: 'March', numOrders: 26220 },
  { month: 'April', numOrders: 28329 },
  { month: 'May', numOrders: 30123 },
  { month: 'June', numOrders: 34749 },
  { month: 'July', numOrders: 40021 },
];

const materialColumns = [
  { field: 'month', headerName: 'Month', width: 100, sortable: false },
  { field: 'material', headerName: 'Material', width: 130, sortable: false },
  {
    field: 'numOrders',
    headerName: 'Number of Orders',
    width: 160,
    type: 'number',
  },
];

const materialRows = [
  { month: 'February', material: 'basic-plastic', numOrders: 8223 },
  { month: 'February', material: 'premium-plastic', numOrders: 1389 },
  { month: 'February', material: 'color-plastic', numOrders: 20123 },
  { month: 'February', material: 'bronze', numOrders: 897 },

  { month: 'March', material: 'basic-plastic', numOrders: 8346 },
  { month: 'March', material: 'premium-plastic', numOrders: 1298 },
  { month: 'March', material: 'color-plastic', numOrders: 22987 },
  { month: 'March', material: 'bronze', numOrders: 847 },

  { month: 'April', material: 'basic-plastic', numOrders: 7583 },
  { month: 'April', material: 'premium-plastic', numOrders: 2947 },
  { month: 'April', material: 'color-plastic', numOrders: 19364 },
  { month: 'April', material: 'bronze', numOrders: 976 },

  { month: 'May', material: 'basic-plastic', numOrders: 8643 },
  { month: 'May', material: 'premium-plastic', numOrders: 1202 },
  { month: 'May', material: 'color-plastic', numOrders: 23942 },
  { month: 'May', material: 'bronze', numOrders: 1293 },

  { month: 'June', material: 'basic-plastic', numOrders: 4569 },
  { month: 'June', material: 'premium-plastic', numOrders: 1589 },
  { month: 'June', material: 'color-plastic', numOrders: 34877 },
  { month: 'June', material: 'bronze', numOrders: 522 },

  { month: 'July', material: 'basic-plastic', numOrders: 9567 },
  { month: 'July', material: 'premium-plastic', numOrders: 10487 },
  { month: 'July', material: 'color-plastic', numOrders: 38909 },
  { month: 'July', material: 'bronze', numOrders: 1599 },
];

const labels = ['Revenue', 'Orders', 'Materials'];
const lineDataKey = ['grossRevenue', 'numOrders', 'numOrders'];

function App() {
  const [tab, setTab] = useState(0);
  const [rows, setRows] = useState(null);
  const [cols, setCols] = useState(null);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    if (tab === 0) {
      setRows(revRows);
      setCols(revColumns);
    } else if (tab === 1) {
      setRows(orderRows);
      setCols(orderColumns);
    } else if (tab === 2) {
      setRows(materialRows);
      setCols(materialColumns);
    }
  }, [tab]);

  return (
    <Container className="App">
      <Typography variant="h1">Source of Truth Dataviewer</Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          mt: '15px',
        }}
      >
        <Tabs value={tab} onChange={handleChange}>
          {/* Revenue Over different time periods to be set by user */}
          {/* sale quantities filtered by time segment */}
          {/* Orders filtered by products in adition to orders filtered by time segment */}
          <Tab value={0} label={labels[0]} />
          <Tab value={1} label={labels[1]} />
          <Tab value={2} label={labels[2]} />
        </Tabs>
      </Box>
      <br />
      <Typography variant="h4">{labels[tab]} by Month</Typography>
      <br />
      {rows && cols && (
        <Box>
          <DataGrid rows={rows} cols={cols} />
        </Box>
      )}
      <br />
      {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Charts data={rows} lineDataKey={lineDataKey[tab]} />
      </Box> */}
    </Container>
  );
}

export default App;
