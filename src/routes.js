import Home from './componentes/templates/home/Home'
import Squad from './componentes/templates/squad/Squad';
import Scrum from './componentes/templates/metodo/Scrum';
import Git from './componentes/templates/git/Git';

export const routes = [
    {
        path: '', component: Home, titulo:'Home'
    },
    {
        path: '/squad', component: Squad, titulo: 'Squad'
    },
    {
        path: '/metodo', component: Scrum, titulo: 'Scrum'
    },
    {
        path: '/Git', component: Git, titulo: 'Git'
    },
 
];


