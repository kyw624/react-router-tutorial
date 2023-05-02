import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // -1: 한 번 뒤로
    // -2: 두 번 뒤로
    // 1: 한 번 앞으로 (뒤로가기를 한 상태로)
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate('/articles', { replace: true });
  };

  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
