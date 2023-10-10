import { movies } from "./movieDummy";

function App() {
  return (
    <div className="app-container">
      {movies.results.map((item) => {
        return <Movie />;
      })}
    </div>
  );
}

export default App;
