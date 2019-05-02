<template>
      <div class="menu">
        <nav class="navegacao">
            <ul>
                <li v-for="rota in rotas" :key="rota.id"> 
                  <router-link :to="rota.path ? rota.path : '/'">
                  {{ rota.titulo }}
                  </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
   props: ['rotas']
}
</script>

<style>


.menu {
    display: block;
    background: #34495e;
    width: 100%;
}

.navegacao ul {
  display: flex;
  justify-content: center;

  list-style: none;
  flex-wrap: wrap;
}

.navegacao a{
 text-decoration: none;
 color: #fff;
}

.navegacao li {
  margin-right: 2px;
  padding: 10px;
  color: #fff;

  font-size: 1.3em;
  font-family: 'Montserrat';

  cursor: pointer;
}

.navegacao li:hover{
  background-color: #2c3e50;
}


</style>
