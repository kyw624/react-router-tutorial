import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>

      {/*
        중첩된 라우트 미적용
        공통된 부분 보여주려면 각 페이지마다 재사용해줘야 함.
        <Route path="articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      */}
      {/* 중첩된 라우트 적용 */}
      <Route path="articles" element={<Articles />}>
        <Route path=":id" element={<Article />} /> {/* 보여지는 부분 */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
