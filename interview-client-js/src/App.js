import React, {useEffect} from "react";

async function getTodos() {
  return []
}

const App = () => {
  useEffect(() => {
    // @ts-ignore
    getTodos().then(console.log);
  }, []);


  return null;
};

export default App;
