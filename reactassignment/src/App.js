
import { Navigation } from './components/navigation/Navigation';
import { Routes } from './routes/Routes';
import "./shared/styles/Style.css";
import { DogeProvider } from './shared/providers/DogeProvider';

function App() {
  return (
    <DogeProvider>
      <Routes>
        <Navigation />
      </Routes>
    </DogeProvider>
  );
}

export default App;
