import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SideMenu = ({ intersected }) => {
  const [open, setState] = React.useState(false);

  const theme = React.useMemo(() => {
    console.log("Intersected? ", intersected);
    return createTheme({
      components: {
        // Name of the component ⚛️
        MuiPaper: {
          styleOverrides: {
            root: {
              background: "rgb(75,230,201)",
              background:
                "linear-gradient(324deg, rgba(75,230,201,1) 0%, rgba(124,73,233,1) 50%, rgba(253,115,130,1) 100%)",
              height: "max-content !important",
              justifyContent: "space-evenly",
              top: "20px !important",
              boxShadow:
                "0px 8px 10px -5px rgb(0 0 0 / 3%), 0px 16px 24px 2px rgb(0 0 0 / 3%), 0px 6px 30px 5px rgb(0 0 0 / 3%)",
              flexDirection: "row !important",
              borderRadius: "0px 3px 3px 0px",
            },
          },
        },
        MuiBackdrop: {
          styleOverrides: {
            root: {
              backgroundColor: "rgba(0,0,0,0.1)",
            },
          },
        },
      },
    });
  }, []);

  const toggleDrawer = (open, event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setState(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="menu">
        <button
          className={
            open
              ? "hidden"
              : "visible text-white-100 pl-1 pr-1.5 py-1 bg-pink-100 shadow-md"
          }
          onClick={(e) => {
            console.log("onclick");
            toggleDrawer(true, e);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Drawer
          anchor="left"
          open={open}
          onClose={(e) => {
            console.log("onclick");
            toggleDrawer(false, e);
          }}
        >
          <a
            onClick={(e) => {
              toggleDrawer(false, e, "work");
            }}
            href="#work"
            className="flex flex-col justify-start self-center items-center space-y-2 py-4 pl-8 text-xs font-normal font-poppins text-white-100"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
            </span>
            <span>WORK</span>
          </a>
          <a
            onClick={(e) => {
              toggleDrawer(false, e, "technologies");
            }}
            href="#technologies"
            className="flex flex-col justify-start self-center items-center space-y-2 py-4 pl-8 text-xs font-normal font-poppins text-white-100"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>Technologies</span>
          </a>
          <a
            onClick={(e) => {
              toggleDrawer(false, e, "contact");
            }}
            href="#contact"
            className="flex flex-col justify-start self-center items-center space-y-2 py-4 pl-8 text-xs font-normal font-poppins text-white-100"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            <span>Contact</span>
          </a>
          <a
            href="/Resume.pdf"
            download
            className="flex flex-col justify-start self-center items-center space-y-2 py-4 px-8 text-xs font-normal font-poppins text-white-100"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>Resume</span>
          </a>
          <div
            onClick={(e) => {
              toggleDrawer(false, e, "contact");
            }}
            className="p-2 absolute text-white-100 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Drawer>
      </div>
    </ThemeProvider>
  );
};

export default SideMenu;
