import AppRouter from "./router/AppRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <AppRouter/>
      </Provider>
    </div>
  );
}

export default App;
