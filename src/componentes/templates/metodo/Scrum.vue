<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <h2>{{ topico }}</h2>
    <p>fundamental para o sucesso do projeto Scrum!</p>
    <p>
      O Product Owner é o ponto central do projeto ágil e é quem exerce a liderança
      <br>sobre o produto que está sendo desenvolvido.
    </p>
    <p>É ele quem diz o que precisa e o que não precisa ser feito em relação ao produto que está sendo desenvolvido.</p>
    <p>
      É um dos os três papéis que constituem uma Equipe Scrum clássica
      <br>(os outros são o Scrum Master e a Equipe de Desenvolvimento).
    </p>
    <p>O Product Owner é quem faz a ponte entre a área de negócios e a Equipe Scrum.</p>
    
    <img src="../../../assets/Interação-Product-Owner.png">

    <div class="container-legenda">
      <p
        class="legenda"
      >De um lado, o Product Owner deve entender as necessidades e prioridades de todos os envolvidos na empresa para agir como seu porta-voz. Neste sentido, ele atua como um gestor do produto, garantindo que a solução correta é desenvolvida</p>
      <p
        class="legenda"
      >Do outro lado, o Product Owner deve se comunicar com o time scrum para ajudar na ordem em que o produto será construído. O Product Owner também deve garantir que os critérios para aceitação do produto estão especificados e que os testes que verificam esses critérios foram executados para determinar que o produto (ou release) possa ser considerado como pronto ao final do Sprint.</p>
    </div>

    <img src="../../../assets/responsibilidadepng.png">

    <h2>{{ item }}</h2>
    <p>
        O Product Owner é um participante-chave nas atividades de planejamento de Produto, Release e Sprints:
    </p>
    <ul>
        <li>
            Durante o planejamento do Produto o Product Owner trabalha com todas as partes interessadas da empresa (diretoria, demais departamentos, etc.) para conseguir visualizar o produto ideal.
        </li>
        <li>
            Durante o planejamento de Release o Product Owner trabalha com as partes interessadas e a Equipe Scrum para definir o conteúdo do próximo lançamento.
        </li>
        <li>
            Durante o planejamento do Sprint , o Product Owner trabalha com a Equipe de Desenvolvimento para definir um objetivo para o Sprint.
        </li>
    </ul>

    <h2> {{ item2 }} </h2>
    <p>
        O Product Owner é responsável por definir os critérios de aceitação para cada item do Product Backlog (o Scrum Master é quem o ajuda com isso).
    </p>

    <p>
        <i>
            Importante: O Product Owner deve assegurar que os critérios de aceitação (e testes de aceitação com frequência específicas) foram criados antes que o item seja considerado na reunião de planejamento de Sprint. Sem eles, a equipe teria uma incompleta compreensão do item e não estaria pronto para incluí-lo em um Sprint...
        </i>
    </p>

    <p>
        O Product Owner é responsável por confirmar se os critérios foram satisfatoriamente atendidos.
    </p>

    <h2>
        {{ item3 }}
    </h2>

    <h3>
        {{ item4 }}
    </h3>

    <p>
    – As dailys acontecem geralmente de segunda a quinta às 14:45. Serve para saber o que o time fez no dia anterior e o que ele fez/vai fazer no dia e comunicar para todos ficarem cientes. Saber se teve algum impedimento que dificultou o job ou de alguma forma atrasou o produto e passar para o time e ver a melhor forma de ajudar. Pós Daily – Geralmente é feita para dar algumas informações importantes para o time as vezes tendo alguma ligação direta com algum time especifico, mas para que todos fiquem cientes.
    </p>

    <h3>
        {{ item5 }}
    </h3>
    <p>
        – Acontece todas as sextas à partir de 14:30. Para o time debater algumas ideias, falar sobre alguns erros que foram encontrados durante semana para que não se repita, 
        alinhar certos componentes e ver quais ficam melhor. E ter ideias boas que possam melhorar o job de todos.
    </p>
    <p>
        Trello
    </p>
    <p>
        – Hoje utilizado só para relatar o que devemos melhorar e debater isso, que é chamado de DAKI.
    </p>

    <div class="conteudo-daki">
      <div class="daki">
        <h3>{{ topico1 }}</h3>
        <p>
          O
          DROP
          são infrações que aconteceram durante a semana e que não deve mais acontecer, pois prejudica o andamento
          do Squad.
        </p>
      </div>

      <div class="daki">
        <h3>{{ topico2 }}</h3>
        <p>
          O
          ADD
          são ideias novas propostas pelo Squad para ser debatida, podendo agilizar/melhorar nosso processo com o
          produto.
        </p>
      </div>

      <div class="daki">
        <h3>{{ topico3 }}</h3>
        <p>
         O
            KEEP
            são atividades e boas maneiras que algumas pessoas tem e devemos passar a praticar com o Squad e manter
            isso em
            prática sempre.
        </p>
      </div>

       <div class="daki">
        <h3>{{ topico4 }}</h3>
        <p>
         O
            IMPROVE
            que são ideias boas que podem melhorar o job de todos ou de algum time.
        </p>
      </div>
    </div>

    <h3>
        {{ item6 }}
    </h3>

    <p>
        Planning
    </p>
    <p>
        – Acontece todas as sextas logo após a retro. Onde o time se reúne e faz uma analise de como foi a semana, se foi produtiva para o que foi planejado. Sendo assim, planejamos a próxima semana e o que cada um vai fazer e qual apostila pegar. Tudo isso feito e planejado pelos cards do Kanbanize.
    </p>
    <p>
        Kanbanize
    </p>
    <p>
        – Local onde utilizamos com bastante frequência para manter a comunicação entre todos do time. O kanbanize é o nosso board dividido em 2 linhas horizontais(lanes). A linha de Fluxo de Produção das apostilas, onde é feita a pré-produção dela, geração de imagens, índice, questões, componentes etc, ate ela está pronta para ser diagramada. Na linha de baixo temos Sustentação (tarefa T3) onde o squad3 fica responsável por ajudar e fazer algumas tarefas de cards q foram solicitados para que o processo de apostila não fique parado. As comunicações são feitas através dos cards criados pelo P. O de acordo com a necessidade e a entrega das apostilas para ser diagramadas. E cada card pode estar em uma determinada linha e coluna. Por exemplo: MED CLM 01 – já foi toda pré-produzida e esta só aguardando diagramação, então ela vai ficar na coluna de “aguardando diagramação”. Quando alguém puxar para diagramar ficará na coluna de “Diagramando”, caso não tenha finalizado o card fica ali, o card nunca anda para trás, só quando volta do acadêmico para corrigir.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Scrum",
      topico: "P.O (Product Owner)",
      item: "Participação no Planejamento",
      item2: "Grooming do Product Backlog",
      item3: "Cerimônias scrum",
      item4: "Daily",
      item5: "RETRO",
      item6: "PLANNING",
      topico1: "DROP",
      topico2: "ADD",
      topico3: "KEEP",
      topico4: "IMPROVE",
    };
  }
};
</script>

<style>


.container-legenda {
  display: flex;
  width: 70%;
}

.legenda {
  word-break: break-word;
  padding: 20px;
  width: 50%;
}

.conteudo-daki{
    display: flex;
}

.daki{
    margin: 10px;
    word-break: break-all;
}
</style>
