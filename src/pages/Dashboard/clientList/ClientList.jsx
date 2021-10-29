
import "./clientList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { clientRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ClientList() {
  const [data, setData] = useState(clientRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "client",
      headerName: "Client",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="clientListClient">
            <img className="clientListImg" src={params.row.avatar} alt="" />
            {params.row.clientname}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/client/" + params.row.id}>
              <button className="clientListEdit">Editar</button>
            </Link>
            <DeleteOutline
              className="clientListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="clientList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
