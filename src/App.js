import './App.css';
import Header from './components/Header';
import Data from './components/Data';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {Data.map((attraction) => {
          return <Content 
          image={attraction.imageUrl}
          location={attraction.location}
          url={attraction.googleMapsUrl}
          title={attraction.title}
          startDate={attraction.startDate}
          endDate={attraction.endDate}
          description={attraction.description}
          />
        })}
      </main>
      <Footer />

    </div>
  );
}

export default App;
