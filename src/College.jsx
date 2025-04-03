import Course from "./Course";

const College = ({ college }) => {
  return (
    <div
    style= {{
        backgroundColor : "#ccc",
        padding : "20px",
        borderBottom : "1px solid #000",
        margin : "20px",
        borderRadius : "10px",
        width : "500px"
    }}>
      <h2>{college.name}</h2>
      <ul>
        <li>
          <h3>City: {college.location}</h3>
        </li>
        <li>
          <h3>Website: {college.website}</h3>
        </li>
        <li>
          <Course courses={college.courses} />
        </li>
      </ul>
    </div>
  );
};

export default College;
