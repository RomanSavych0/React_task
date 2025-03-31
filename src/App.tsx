import './App.css';
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";
import InputForm from "./components/InputForm.tsx";
import { Provider } from 'react-redux';
import store from './store/store.ts';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <InputForm />
                <ToastContainer />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
