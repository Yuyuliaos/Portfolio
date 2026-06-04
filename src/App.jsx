import HomePage from "./pages/HomePage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith("/project/")) {
    const projectId = path.replace("/project/", "").replace("/", "");

    return <ProjectDetailPage projectId={projectId} />;
  }

  return <HomePage />;
}