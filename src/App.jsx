import { useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  };
  return (
    <>
      <h1>useTransition hook in react js</h1>
      {pending ? (
        <img
          src="https://cdn.dribbble.com/users/760347/screenshots/7341673/media/b5af68cdf397db3063f89e5b466aab11.gif"
          alt="loading"
          style={{width: "300px"}}
        />
      ) : (
        <h2>Loaded Button</h2>
      )}
      <button disabled={pending} onClick={handleButton}>
        Clicked me
      </button>
    </>
  );
}

export default App;
