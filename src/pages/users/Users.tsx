import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../component/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: "avatar", 
    headerName:"Avatar",
    width: 100,
    renderCell: (params)=>{
      return <img src={params.row.img || "/noavatar.png"} alt=""/>
    }
  },

  {
    field:"status", headerName:"Verified", width:100, type:"boolean"
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },


];

 
const Users = () => {
  return (
   <div className="users">
    <div className="info">
      <h1>Users</h1>
      <button>Add New Users</button>
    </div>
      <DataTable slug= "users" columns={columns} rows={userRows}/>
   </div>
)
}

export default Users