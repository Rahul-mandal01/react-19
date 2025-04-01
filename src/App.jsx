
function App() {
  const userNames = ['rahul', 'sam', 'john', 'rohan'];

  const userData = [
    {
      name: 'rahul',
      age: 28,
      city: 'delhi',
      id: 1
    },
    {
      name:'sam',
      age: 30,
      city: 'mumbai',
      id: 2
    },
    {
      name: 'john',
      age: 26,
      city: 'chennai',
      id: 3
    },
    {
      name : 'rohan',
      age: 35,
      city: 'bangalore',
      id: 4
    }

  ]
  return (
    <>
      <h1>Hello Ji</h1>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
