import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import DataGrid from './DataGrid';
import { LineCharts, BarCharts } from './Charts';
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
  {
    field: 'basic_plastic',
    headerName: 'basic_plastic',
    width: 130,
  },
  {
    field: 'premium_plastic',
    headerName: 'premium_plastic',
    width: 130,
  },
  {
    field: 'color_plastic',
    headerName: 'color_plastic',
    width: 130,
  },
  {
    field: 'bronze',
    headerName: 'bronze',
    width: 130,
  },
];

const materialRows = [
  {
    month: 'February',
    basic_plastic: 8223,
    premium_plastic: 1389,
    color_plastic: 20123,
    bronze: 897,
  },

  {
    month: 'March',
    basic_plastic: 8346,
    premium_plastic: 1298,
    color_plastic: 22987,
    bronze: 847,
  },

  {
    month: 'April',
    basic_plastic: 7583,
    premium_plastic: 2947,
    color_plastic: 19364,
    bronze: 976,
  },

  {
    month: 'May',
    basic_plastic: 8643,
    premium_plastic: 1202,
    color_plastic: 23942,
    bronze: 1293,
  },

  {
    month: 'June',
    basic_plastic: 4569,
    premium_plastic: 1589,
    color_plastic: 34877,
    bronze: 522,
  },

  {
    month: 'July',
    basic_plastic: 9567,
    premium_plastic: 10487,
    color_plastic: 38909,
    bronze: 1599,
  },
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
      {tab !== 2 && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LineCharts data={rows} lineDataKey={lineDataKey[tab]} />
        </Box>
      )}
      {tab === 2 && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <BarCharts data={rows} />
        </Box>
      )}
    </Container>
  );
}

export default App;
