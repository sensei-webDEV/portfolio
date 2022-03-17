import * as React from "react";
import { Popover as MuiPopover } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Popover = ({
  direction,
  setScrollable,
  technologies = ["tech", "tech", "tech", "tech", "tech", "tech"],
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // MUI styling
  const theme = React.useMemo(() => {
    return createTheme({
      components: {
        // Name of the component ⚛️
        MuiPaper: {
          styleOverrides: {
            root: {
              background: "#060b43",
              height: "max-content !important",
              justifyContent: "space-evenly",
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

  const handleClick = (event) => {
    setScrollable(false);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setScrollable(true);
    setAnchorEl(null);
  };

  const determineTechStripeChevron = () => {
    if (direction === "ltr")
      return "top-full left-full -translate-y-1.5 -translate-x-5 -rotate-90";
    if (direction === "rtl")
      return "bottom-full right-full translate-y-1.5 translate-x-30 rotate-90";
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <button
          className={`absolute bg-black-100 z-20 p-1 ${
            open && "opacity-0"
          } transform ${determineTechStripeChevron()}`}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <span className={`h-4 w-4 lg:w-3.5 lg:h-3.5 4xl:w-6 4xl:h-6 `}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 lg:w-3.5 lg:h-3.5 4xl:w-6 4xl:h-6 ${
                open && "opacity-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <MuiPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: `${direction === "ltr" ? "left" : "right"}`,
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: `${direction === "ltr" ? "right" : "left"}`,
          }}
        >
          <div className="flex flex-col space-y-0 justify-center px-4">
            <div className="text-2xs font-poppins font-light text-white-100 pt-4 pb-3.5 flex-shrink-0 flex flex-col space-y-2">
              <span>
                Noteworthy technologies & tools used for this project.
              </span>
              <div className="h-0.5 ml-1 bg-gray-200 opacity-30 w-1/4" />
            </div>
            <div className="flex space-x-5 items-end justify-center flex-wrap w-156 xl:w-auto space-y-2 2xl:space-x-8 3xl:space-x-10 pb-6 filter mix-blend-luminosity brightness-150 subpixel-antialiased">
              {technologies.map((tech, i) => {
                return (
                  <div
                    key={i}
                    className="p-1 shadow-lg bg-gray-200 bg-opacity-5 rounded-md"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>
        </MuiPopover>
      </div>
    </ThemeProvider>
  );
};

export default Popover;
