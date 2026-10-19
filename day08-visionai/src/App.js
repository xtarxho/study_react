import logo from './logo.svg';
import './App.css';
import ImageUpload from './pages/ImageUpload';
import ProductResult from './pages/ProductResult';
import { useState } from 'react';
import ProductSearchResult from './pages/ProductSearchResult';

function App() {

  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [result, setResult] = useState(null)

  return (
    <div className="app">
      <header>

        <h1>Vision shop</h1>


        <nav>
          <span>상품</span>
          <span>AI 상품검색</span>
          <span>장바구니</span>
        </nav>

      </header>

      <main>
        <ImageUpload setIsAnalyzed={setIsAnalyzed}
          setResult={setResult} />

        {
          isAnalyzed && (
            <div>
              <ProductResult result={result} />
              <ProductSearchResult result={result}/>
            </div>
          )
        }
      </main>

    </div>
  );
}

export default App;
