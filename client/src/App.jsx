import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { CommentProvider } from './components/commentProvider';
import Headernav from './components/headernav';

const Hpage = lazy(() => import('./components/homepage'));
const Apage = lazy(() => import('./components/about'));

function App() {
  return (
    <>
      <CommentProvider>
        <Headernav />
        <section>
          <Suspense
            fallback={
              <div>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Hpage />} />
              <Route path="/about" element={<Apage />} />
            </Routes>
          </Suspense>
        </section>
      </CommentProvider>
    </>
  );
}

export default App;