import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ArticleList from "./ArticleList";
import ArticlePage from "./ArticlePage";
import { userContext } from "./contexts/userContext";
import { useState } from "react";
import PageNotFound from "./PageNotFound";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#5893df",
      },
      secondary: {
        main: "#2ec5d3",
      },
      background: {
        default: "#192231",
        paper: "#24344d",
      },
      tertiary: {
        main: "#ffffff",
      },
      text: {
        primary: "#ffffff",
      },
    },
    components: {
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: "#5893df",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "#ffffff",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: "#ffffff",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <userContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<ArticleList />} />
              <Route path="/:topic" element={<ArticleList />} />
              <Route path="articles/:article_id" element={<ArticlePage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </userContext.Provider>
    </ThemeProvider>
  );
}

export default App;
