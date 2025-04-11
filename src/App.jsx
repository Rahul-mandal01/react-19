import { useFormStatus } from "react-dom";

function App() {
  const handleSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Form submitted successfully!");
    console.log("Submitted successfully!");
  };

  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </div>
    );
  }
  return (
    <>
      <h1>useFormStatus hook in react js</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
}

export default App;
