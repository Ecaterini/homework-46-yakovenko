import { Provider } from "react-redux";
import { store } from "./redux/store";
import ComponentA from "./components/ComponentA";

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <h1>Redux Demo</h1>
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;