<template>
  <div class="content">
    <meu-menu :rotas="routes"/>
    <transition name="pagina">
      <router-view>
        <home></home>
        <squad></squad>
        <scrum></scrum>
        <git></git>
      </router-view>
    </transition>

  </div>
</template>

<script>

import Home from './componentes/templates/home/Home';
import Menu from './componentes/templates/shared/menu/Menu';
import Squad from './componentes/templates/squad/Squad';
import Scrum from './componentes/templates/metodo/Scrum';
import Git from './componentes/templates/git/Git';


import { routes } from './routes';

export default {

  data(){
    return{
      routes
    }
  },

  components:{
    home: Home,
    'meu-menu': Menu,
    squad : Squad,
    scrum : Scrum,
    git : Git
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lora|Montserrat');

*{
  padding: 0;
  margin: 0;
}

.container {
  margin: 20px 50px;
}

.content{
  margin: 0;
  top: 0;
}

h1 {
  color: #000;
  font-family: 'Montserrat';
  margin-bottom: 20px;
  text-align: center;
}

h2{
  color: #2980b9;
  font-family: 'Montserrat';
  border-bottom: 2px solid #cecece;
  width: fit-content;
  margin: 20px 0 10px 0;
}

h3{
  color: #8e44ad;
  font-family: 'Montserrat';
  margin: 20px 0 10px 0;
}

h4{
  color: #e74c3c;
  font-family: 'Montserrat';
  margin-bottom: 10px;

}

p{
  font-family: 'Lato';
  font-size: 1.1em;
  margin-bottom: 10px;
}

i{
  font-family: 'Lato-italic';
}

b{
  font-family: 'Lato-bold';
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.pagina-enter, .pagina-leave-active{
  opacity: 0;
}

.pagina-enter-active, .pagina-leave-active{
  transition:  opacity .3s;
}

</style>  
