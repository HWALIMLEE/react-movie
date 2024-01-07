import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  // switch 의 역할은 router 를 찾는 것
  // 여러 route 컴포넌트들 중에서 현재 URL 과 일치하는 첫 번째 자식 Route 컴포넌트만 렌더링하는 역할
  // link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
