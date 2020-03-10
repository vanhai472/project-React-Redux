import Login from '../components/Login';
import About from '../components/about';
import DetailGame from '../components/DetailGame';

const Routes=[
    {
      name:' đăng nhập',
      exact: true,
      path:'/',
      component:Login
  },
  {
    name:' new game',
    exact: true,
    path:'/newGame',
    component:About
  },
   {
     name:'chi tiết',
     exact: true,
     path:'/detail/:id',
     component:DetailGame
   },
  // {
  //   name: ' Not found',
  //   path:'',
  //   component:Notfound
  // }
  ]
 
export default Routes;