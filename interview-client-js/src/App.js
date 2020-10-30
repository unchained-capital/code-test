import React, {useEffect} from "react";

async function getTodos() {
  return [];
}

const App = () => {
  useEffect(() => {
    getTodos().then(console.log("Welcome."));
  }, []);


  return (<div style={{marginTop: "2em", textAlign: "center"}}>It looks like you have everything set up properly, good luck.</div>);
};

export default App;
