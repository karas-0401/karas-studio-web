import Header from './components/Header';
import Banner from './components/Banner';
import Grid from './components/Grid';
import Foot from './components/Foot';

function App() {
  return (
    <div className='w-[1336px] mx-auto flex flex-col items-center justify-center overflow-hidden'>
        <Header />
        <Banner />
        <Grid />
        <Foot />
    </div>
  );
}

export default App;