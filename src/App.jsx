import "./App.css";
import TableContainer from "./Componets/TableContainer";

function App() {
  const fields = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
  ];
  const data = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 28 },
    { id: 6, lastName: "Baratheon", firstName: "Robert", age: 38 },
    { id: 7, lastName: "Greyjoy", firstName: "Theon", age: 25 },
    { id: 8, lastName: "Tyrell", firstName: "Margaery", age: 30 },
    { id: 9, lastName: "Martell", firstName: "Oberyn", age: 40 },
    { id: 10, lastName: "Bolton", firstName: "Ramsay", age: 34 },
    { id: 11, lastName: "Tully", firstName: "Edmure", age: 41 },
    { id: 12, lastName: "Arryn", firstName: "Robin", age: 15 },
    { id: 13, lastName: "Clegane", firstName: "Sandor", age: 38 },
    { id: 14, lastName: "Baelish", firstName: "Petyr", age: 47 },
    { id: 15, lastName: "Reed", firstName: "Meera", age: 19 },
    { id: 16, lastName: "Karstark", firstName: "Rickard", age: 55 },
    { id: 17, lastName: "Mormont", firstName: "Jorah", age: 45 },
    { id: 18, lastName: "Seaworth", firstName: "Davos", age: 50 },
    { id: 19, lastName: "Frey", firstName: "Walder", age: 90 },
    { id: 20, lastName: "Dayne", firstName: "Arthur", age: 30 },
    { id: 21, lastName: "Tarly", firstName: "Samwell", age: 25 },
    { id: 22, lastName: "Blackfyre", firstName: "Daemon", age: 32 },
    { id: 23, lastName: "Drumm", firstName: "Dunstan", age: 48 },
    { id: 24, lastName: "Hightower", firstName: "Leyton", age: 60 },
    { id: 25, lastName: "Strong", firstName: "Harwin", age: 33 },
    { id: 26, lastName: "Velaryon", firstName: "Corlys", age: 52 },
    { id: 27, lastName: "Royce", firstName: "Yohn", age: 62 },
    { id: 28, lastName: "Florent", firstName: "Alester", age: 45 },
    { id: 29, lastName: "Hunter", firstName: "Gilwood", age: 36 },
    { id: 30, lastName: "Qorgyle", firstName: "Quentyn", age: 27 }
];

  return (
    <div className="App">
      <TableContainer
        fields={fields}
        data={data}
        paginationOptions={[5, 10]}
        styles={{}}
      />
    </div>
  );
}

export default App;