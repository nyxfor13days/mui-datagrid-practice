import { useTheme, ThemeProvider, CssBaseline, Stack } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import RootRouter from "./routes";

const App = () => {
  const theme = useTheme();
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Stack p={2}>
            <RootRouter />
          </Stack>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
