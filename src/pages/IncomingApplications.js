import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Footer from '../components/Footer';
import applicationsController from '../services/CRUD-services/Applications';
import userController from '../services/CRUD-services/UserController';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'checkout',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'name',
    headerName: 'Book Title',
    width: 150,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 110,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone',
    width: 110,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
      applicationsController.getApplications().then(r => {
        if (r) setItems(r);
      })
  }, []);

  return (
    <div style={{ height: 500, width: '90%', paddingLeft: "5%", paddingRight: "5%", backgroundImage: "linear-gradient(to right, #00C2FF, #019CF3)", paddingBottom: "20px", paddingTop: "20px" }}>
      <DataGrid
        rows={items}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
        style={{backgroundColor: "white"}}
      />
      <Footer />
    </div>
  );
}
