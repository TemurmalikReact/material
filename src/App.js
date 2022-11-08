import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, gridClasses } from "@mui/x-data-grid";
import { Avatar, Button, Modal, Typography } from "@mui/material";

function App() {
  const [img, setImg] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = (image) => {
    setOpen(true);
    setImg(image);
  };
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "Image",
      headerName: "Image",
      renderCell: (params) => (
        <Avatar
          style={{  border: "1px rgb(200, 200, 255) solid", cursor: "pointer", boxShadow: '0 5px 5px rgb(100, 100, 100)' }}
          onClick={() => handleOpen(params.row.src)}
          src={params.row.src}
        />
      ),
      width: 75,
      sortable: false,
      filterable: false,
      cellClassName: "white",
      headerClassName: "white",
    },
    {
      field: "Description",
      headerName: "Description",
      width: 500,
      filterable: true,
      cellClassName: "red",
      headerClassName: "red",
    },
    {
      field: "Made",
      headerName: "Made in",
      width: 300,
      filterable: true,
      cellClassName: "blue",
      headerClassName: "blue",
    },
    {
      field: "Users",
      headerName: "Users",
      width: 300,
      filterable: true,
      cellClassName: "green",
      headerClassName: "green",
    }
  ];

  const rows = [
    {
      id: 1,
      Description: "React",
      Made: "1990",
      Users: "1 000 000",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    },
    {
      id: 2,
      Description: "Angular",
      Made: "1990",
      Users: "500 000",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    },
    {
      id: 3,
      Description: "Vue",
      Made: "2010",
      Users: "100 000",
      headerClassName: "super-app-theme--header",
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
    }
  ];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    height: 300,
    bgcolor: "background.paper",
    boxShadow: 20,
    p: 5
  };

  return (
    <>
      <Box
        sx={{
          height: 455,
          width: "100%",
          "& .white": {
            backgroundColor: "rgba(225, 225, 225, 0.25)",
          },
          "& .red": {
            backgroundColor: "rgba(255, 0, 0, 0.25)",
          },
          "& .blue": {
            backgroundColor: "rgba(0, 0, 255, 0.25)",
          },
          "& .green": {
            backgroundColor: "rgba(0, 255, 0, 0.25)",
          },
        }}
      >
        <DataGrid
          headerHeight={100}
          getRowHeight={() => 'auto'}
          sx={{
            [`& .${gridClasses.cell}`]: {
              minHeight: '100px',
              maxHeight: '300px',
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            alt=""
            style={{ width: "100%", height: '100%' }}
            src={
              img ||
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=="
            }
          />
        </Box>
      </Modal>
    </>
  );
}

export default App;
