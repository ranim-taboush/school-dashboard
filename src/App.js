import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components/index";
import {
  Ecommerce,
  Calendar,
  Stacked,
  Pyramid,
  Chapters,
  Subjects,
  Semesters,
  Grades,
  Levels,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
  Line,
} from "./pages/index";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "./contexts/ContextProvider";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentMode,
    currentColor,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed left-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? `md:mr-72` : `flex-2`
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                {/* <Route path="/" element={<Ecommerce />} /> */}
                <Route path="/" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/levels" element={<Levels />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/semesters" element={<Semesters />} />
                <Route path="/subjects" element={<Subjects />} />
                <Route path="/chapters" element={<Chapters />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/financial" element={<Financial />} /> */}
                {/* <Route path="/color-mapping" element={<ColorMapping />/} /> */}
                {/* <Route path="/pyramid" element={<Pyramid />} /> */}
                {/* <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
