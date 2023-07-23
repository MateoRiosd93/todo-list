import { Router, Route } from "wouter";

import { Home } from "./components/views/home/Home";
import Layout from "./components/layout/Layout";
import Todos from "./components/views/todos/Todos";

function App() {
  return (
    <Layout>
      <Router>
        <Route path="/" component={Home}/>
        <Route path="/tasks" component={Todos}/>
      </Router>
    </Layout>
  );
}

export { App };
