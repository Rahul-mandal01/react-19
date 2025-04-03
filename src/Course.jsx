const Course = ({ courses }) => {
  return (
    <div>
      <h3>Courses</h3>
      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
          }}
        >
          <ul>
            <li>
              <strong>Name:</strong> {course.name}
            </li>
            <li>
              <strong>Duration:</strong> {course.duration}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Course;
