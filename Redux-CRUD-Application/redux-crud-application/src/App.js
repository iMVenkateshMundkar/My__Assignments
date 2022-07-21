import "./App.css";
import MainRoutes from "./Screens/MainRoutes";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container maxWidth={"6xl"}>
      <MainRoutes />
    </Container>
  );
}

export default App;
