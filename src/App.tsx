import { Route, Switch } from 'wouter'

import { Home } from './components/views/home'
import { Layout } from './components/layout'
import { ToDos } from './components/views/to-dos'
import { NotFound } from './components/views/not-found'

export function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/to-dos' component={ToDos} />
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    )
}
