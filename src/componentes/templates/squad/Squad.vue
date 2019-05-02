<template>
    <div class="container">
        <h1> {{ titulo }} </h1>
        <h2> {{ subtitulo }} </h2>

        <p>
            – Responsável pelos recortes de imagens das apostilas
            (Insumos). Também são responsáveis pela criação dos componentes de cada apostila,
            utilizando o css. Esses componentes é que serão utilizados para stylizar as apostilas digitais.
            Cada apostila vai ter seus componentes específicos e estruturados de uma forma organizada pelo         Squad 1.
        </p>
        <p>
            <b>Obs:</b>
            Squad 1
            sempre vai estar 3 semanas na frente dos demais times.
        </p>

        <h2> {{ subtitulo2 }} </h2>

        <p>
            – Responsável pela diagramação das apostilas, revisão no browser após o término, revisão
            no abby, minificar o arquivo principal, subir para o aplicativo e testar no app.
        </p>

         <p>
            Após a finalização das apostilas enviamos ela para o acadêmico para validação (feita toda a correção da apostila linha por linha para encontrar erros de texto e divergências de componentes), quando a apostila volta para a lane de correção temos acesso a uma planilha de erros constanto todos os erros encontrados pelo acadêmico é feita a correção e enviada novamente.
             
        </p>
        <p>
            <b>Obs:</b>
            T2 sempre vai estar 2 semanas na frente da semana atual das apostilas.
        </p>

        
        </div>
  

 
    
</template>

<script>
export default {
    data(){
        return{
            titulo: 'Squads',
            subtitulo: 'Squad 1 - Preparação de Insumos',
            subtitulo2: 'Squad 2 - Diagramação e correção',
        }
    }
}
</script>

<style>


</style>
