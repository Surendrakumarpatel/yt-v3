import React  from 'react' 
import { Outlet} from 'react-router-dom';
 
const Body = () => {
  
  return (
    <div className={`flex md:justify-between justify-center dark:text-white pt-16`}>
        <Outlet/>
    </div>
  )
}

export default Body