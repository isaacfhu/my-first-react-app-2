import "./App.css";

function App() {
  return (
    <>
      <Text display="hi" />
      <Text display="world"></Text>
    </>
  );
}

const Text = ({ display }) => {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
};

export default App;
