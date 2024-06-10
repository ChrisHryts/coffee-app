import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/transactions" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
