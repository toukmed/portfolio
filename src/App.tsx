import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/layout/layout";
import Home from "./components/home";
import AboutMe from "./components/about-me";
import Resume from "./components/resume";
import Skills from "./components/skills";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Suspense fallback={<p className="p-4">Loading...</p>}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {import.meta.env.VITE_TEMPO === "true" && (
                <Route path="/tempobook/*" />
              )}
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </Layout>
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
