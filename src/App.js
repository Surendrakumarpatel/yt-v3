import './App.css'
import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Feed from './components/Feed';
 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className='dark:bg-[#121212] transition-all duration-500'>
        <Header/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
