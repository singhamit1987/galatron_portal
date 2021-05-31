import React, { Component, Suspense, useEffect, useState } from 'react'
import ErrorBoundary from './error-boundary'
import Loading from './components/common/loading'
const Mainrouting = React.lazy(() => import('./routes/route'));

export default class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <Mainrouting />
          </Suspense>
        </div>
      </ErrorBoundary>
    );
  }
}