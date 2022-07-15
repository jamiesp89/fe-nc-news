import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Jamie");

  const handleClick = (name) => {
    setName("Oliver");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
