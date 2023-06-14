import { Route, Routes } from "react-router-dom";
import Main from "./layout/main";
import ChatCompletion from "./routes/Chat";
import ImageGenerator from "./routes/Image";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<ChatCompletion />} />
                <Route path="image" element={<ImageGenerator />} />
            </Route>
        </Routes>
    );
}

export default App;
