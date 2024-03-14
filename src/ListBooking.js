
import { useEffect,  useState } from "react";
import { MantineReactTable } from "mantine-react-table";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function ListBooking() {
  const [tableData, seTableData] = useState([]);
//   const [DocumentNo, setDocumetNo] = useState("");
 
  const columns = [
      {
        accessorKey: "name",
        header:"Name"
      },
      {
        accessorKey: "mobileNumber",
        header:"Mobile Number"
      },
      {
        accessorKey: "email",
        header:"Email",
      },
      {
        accessorKey: "selectedDate",
        header:"Selected Date",
      },
      {
        accessorKey: "selectedTime",
        header:"Selected Time",
      },
    ]


  function fetchData() {
    axios
      .get("http://localhost:3001/all-booking")
      .then((data) => seTableData(data.data))
      .catch((err) => console.log(err));
    //   setDocumetNo("")
  }
//   function handleSearch() {
//     axios.post("http://localhost:3001/search", {
//       DocumentNo
      
//     }).then((data) => seTableData(data.data))
//     .catch((err) => console.log(err));
    
      
//   }
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
    <Sidebar></Sidebar>
        <div style={{padding:"1rem", display:"flex",flexDirection:"column"}}>
          <div style={{float:"right",display:"flex",alignItems:"flex-end",justifyContent:"end"}}>
       {/* <Button  size={"md"} className="Btn" onClick={navigateToAnotherPage}
      variant="gradient" gradient={{ from: '#242f37', to: 'red', deg: 2 }}
      radius="md">
          Add
        </Button> */}
        </div>
<div className="table" style={{marginTop:"1rem"}}>

        {tableData?.length && columns && <MantineReactTable data={tableData} columns={columns} renderTopToolbarCustomActions={({ table }) => {
        //   return (
        //     <div style={{ width: "80%" }}>
        //       <input value={DocumentNo} onChange={(e)=> setDocumetNo(e.target.value)}></input>
        //       <button onClick={handleSearch}>Search</button>
        //       <button onClick={fetchData}>clear</button>
        //     </div>
        //   );
        }}
 enableSorting={true} >
          
          </MantineReactTable>}
        
      </div>
      </div>
    </>
  );
}
