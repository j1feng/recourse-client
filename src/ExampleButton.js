let ExampleButton = () => {
    let MakeAlert = () => {return alert("test message.");}
    return <button onClick={MakeAlert}>
      Click button to get your loan approved
      </button>;
  }

export default ExampleButton;