import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Footer from '../components/Footer';
import applicationsController from '../services/CRUD-services/Applications';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "fullname",
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: "name",
    headerName: 'Book Title',
    width: 150,
  },
  {
    field: "city",
    headerName: 'City',
    width: 150,
  },
  {
    field: "country",
    headerName: 'Country',
    width: 110,
  },
  {
    field: "phoneNumber",
    headerName: 'Phone',
    width: 110,
  },
  {
    field: "email",
    headerName: 'Email',
    width: 110,
  },
];

export default function DataGridDemo() {
  const [items, setItems] = React.useState([]);
  const rows = []

  React.useEffect(() => {
      applicationsController.getApplications().then(r => {
        if (r) setItems(r);
      })
  }, []);

  items.forEach((item) => {
    rows.push({ id: item.id, fullname: item.checkout.fullname, name: item.book.name, city: item.checkout.city, country: item.checkout.country, phoneNumber: item.checkout.phoneNumber, email: item.checkout.email })
  });

  return (
    <div style={{ height: 500, width: '90%', paddingLeft: "5%", paddingRight: "5%", backgroundImage: "linear-gradient(to right, #00C2FF, #019CF3)", paddingBottom: "20px", paddingTop: "20px" }}>
      <DataGrid
        rows={rows}
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
