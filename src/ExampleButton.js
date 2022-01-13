let ExampleButton = () => {
    let MakeAlert = () => {return alert("test message.");}
    return <button onClick={MakeAlert}>
      Click this button to instantly get your loan approved
      </button>;
  }

export default ExampleButton;