//import getAllVehicales from "./api/vehicles";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function Vehicles({list}){
    return <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell align="right">Brand</TableCell>
          <TableCell align="right">Model</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell align="right">{row.brand}</TableCell>
            <TableCell align="right">{row.model}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

Vehicles.getInitialProps = async () => {
    const resp = await fetch('http://localhost:3000/api/vehicles');
    const json = await resp.json();
    return {list: json};
}