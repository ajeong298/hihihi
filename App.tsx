
import React, { useState, useCallback } from 'react';
import { getEncouragementForTeacher } from './services/geminiService';
import QuoteCard from './components/QuoteCard';
import LoadingSpinner from './components/LoadingSpinner';
import InitialCard from './components/InitialCard';

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetQuote = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setQuote('');
    try {
      const newQuote = await getEncouragementForTeacher();
      setQuote(newQuote);
    } catch (err) {
      setError('응원 메시지를 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 flex flex-col items-center justify-center p-4 text-center">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">오늘의 응원</h1>
        <p className="text-xl text-gray-600">지친 교사님들을 위한 작은 위로</p>
      </header>
      
      <main className="w-full max-w-2xl min-h-[250px] flex items-center justify-center">
        {isLoading && <LoadingSpinner />}
        {error && <p className="text-red-500 bg-white/50 p-4 rounded-lg">{error}</p>}
        {!isLoading && !error && quote && <QuoteCard quote={quote} />}
        {!isLoading && !error && !quote && <InitialCard />}
      </main>

      <footer className="mt-12">
        <button
          onClick={handleGetQuote}
          disabled={isLoading}
          className="px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          {isLoading ? '응원 문구 생성 중...' : '오늘의 응원 받기'}
        </button>
      </footer>
    </div>
  );
};

export default App;
