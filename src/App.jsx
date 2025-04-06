import './css/style.css';
import User from "./User.js";

function App() {

  return (
    <>
      <h1 className='heading' >External Style in React Js</h1>
      <div className='container'>
        {User.map((user, index) => (
          <div key={index} className='user-card'>
            <img src={user.image} className='img-style' />
            <div className='text-wrap'>
              <h4>{user.name}</h4>
              <p>{user.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
