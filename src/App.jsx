import User from './User'
function App() {
  const userData=[
    {
      name : "Rahul",
      age: 23,
      city : "Kolkata",
      id: 1
    },
    {
      name : "Sam",
      age: 25,
      city : "Mumbai",
      id: 2
    },
    {
      name : "Michael",
      age: 33,
      city : "London",
      id: 3
    },
    {
      name : "Alice",
      age: 29,
      city : "Delhi",
      id: 4
    }
  ]
  return (
    <>
      <h1 style={{display:"flex", alignItems: "center", justifyContent:"center"}}>Reuse Component in Loop</h1>
      {
        userData.map((user) => (
          <div key={user.id} style={{
            display:"flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <User data={user}/>
          </div>
        ))
      }

    </>
  );
}

export default App;
