import College from "./College";

function App() {
  const collegeData = [
    {
      name: "NSEC Kolkata",
      location: "Kolkata",
      website: "www.nsec.ac.in",
      courses: [
        {
          name: "B.Tech",
          duration: "4 years",
        },
        {
          name: "M.Tech",
          duration: "2 years",
        },
        {
          name: "MBA",
          duration: "2 years",
        },
      ],
    },

    {
      name: "IEM Kolkata",
      location: "Kolkata",
      website: "www.iem.edu.in",
      courses: [
        {
          name: "B.Tech",
          duration: "4 years",
        },
        {
          name: "M.Tech",
          duration: "2 years",
        },
        {
          name: "MBA",
          duration: "2 years",
        },
      ],
    },
    {
      name: "NIT Kolkata",
      location: "Kolkata",
      website: "www.jis.edu.in",
      courses: [
        {
          name: "B.Tech",
          duration: "4 years",
        },
        {
          name: "M.Tech",
          duration: "2 years",
        },
        {
          name: "MBA",
          duration: "2 years",
        },
      ],
    },
  ];
  return (
    <>
      <h1>Nested Looping in React js</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {collegeData.map((college, index) => (
          <div key={index}>
            <College college={college} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
