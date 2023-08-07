import { Route, Switch } from 'wouter'

import { Home } from './components/views/home/Home'
import { Layout } from './components/layout/Layout'
import { Todos } from './components/views/todos/Todos'
import { NotFound } from './components/views/notFound'

export function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/tasks' component={Todos} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    )
}
