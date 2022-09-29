import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const [id, setId] = useState();
  return (
    <>
      {id}
      <LoginForm onIdSubmit={setId} />;
    </>
  );
}

export default App;
