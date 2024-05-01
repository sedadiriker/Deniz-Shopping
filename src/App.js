import AppRouter from "./router/AppRouter";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from "react-redux";
import { Box } from "@mui/material";
import { store } from "./redux/store/store";
function App() {
  return (
    <Box sx={{backgroundColor:"rgb(246, 239, 231)"}} className="App">
      <Provider store={store}>
      <AppRouter/>
      </Provider>
    </Box>
  );
}

export default App;
