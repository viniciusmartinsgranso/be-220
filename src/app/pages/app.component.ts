import { Component } from '@angular/core';
import { PostProxy } from "../models/proxies/post.proxy";
import { PostService } from "../services/post/post.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
      private readonly postService: PostService,
  ) {
    this.initiatePosts();
  }

  public posts: PostProxy[] = [
    {
      title: '10 dos métodos mais usados no Brasil para emagrecer e quais funcionam',
      images: ['assets/images/gym-option.png', 'assets/images/academia-em-casa.jpg'],
      descriptions: ['Quando o objetivo é reduzir alguns (ou vários) quilos, muitas pessoas tentam de tudo: exercícios, dietas, procedimentos estéticos, receitas caseiras, medicamentos... Mas quais abordagens são realmente eficazes, saudáveis e duradouras e quais são perda de tempo ou podem colocar sua saúde em risco?',
        'Em uma pesquisa por e-mail do programa Vigilante do Peso, 1512 pessoas de todo o Brasil (a grande maioria mulheres) revelaram quais técnicas de emagrecimento já adotaram —responderam ao questionário associados e ex-associados do Vigilantes, assim como pessoas que nunca utilizaram o método. O VivaBem entrevistou especialistas para mostrar a você quais das 10 táticas mais usadas pelos participantes da pesquisa funcionam —as pessoas podiam escolher mais de uma opção, por isso as respostas ultrapassam os 100%.'],
      id: 0,
    },
    {
      title: 'Como ganhar massa muscular? Veja dicas de um especialista',
      images: ['assets/images/ganho-massa-muscular.jpg', 'assets/images/ganho-massa-muscular-2.jpg'],
      descriptions: ['A principal forma de ganhar massa muscular é por meio dos exercícios físicos, especialmente os localizados ou que exercem algum tipo de sobrecarga (controlada, claro) sobre um determinado músculo ou grupo muscular. Também é importante que a prática desse exercício seja semanal, com cargas adequadas conforme a aptidão física do praticante e também a condição clínica do músculo.',
          'O ganho de massa muscular está muito ligado ao aumento da ingestão de proteínas (como carne, ovos, peixe, laticínios), desde que, claro, a prática de exercícios esteja adequada com essa ingestão. \n' +
          '\n' +
          'O principal papel das proteínas é fornecer aminoácidos (uma espécie de molécula que atua como “tijolinhos”) para a reconstrução da musculatura após o treino, fazendo o músculo “crescer” \n' +
          '\n' +
          'Outro nutriente importante são os carboidratos, já que eles são fundamentais para fornecer energia durante os exercícios físicos.'
        ],
      id: 1,
    },
    {
      title: 'Como é uma aula de Fitdance?',
      images: ['assets/images/fit-dance.png', 'assets/images/fit-dance-2.png'],
      descriptions: ['Apesar da coreografia elaborada, na aula de FitDance só há uma regra: seguir o ritmo e se divertir. O FitDance é para todos, os passos são adaptáveis e a prioridade é concluir o que é possível e evoluir aos poucos. Curtir a aula de forma leve é o que o torna um sucesso para o corpo e a mente',
        'É difícil escolher um motivo só. Esse treino traz benefícios para a saúde física – como perda de 350 calorias por aula, melhora a sua postura e pode ser feito por alunos Iniciantes, intermediários e avançados. Para a mente, também faz bem, aliviando o estresse e aumentando a autoestima e possibilitando a interação com pessoas que compartilham objetivos parecidos. Se você está começando a se exercitar agora, pode encontrar uma grande aliada: a aula de FitDance é divertida e envolvente. Assim, fica fácil para iniciantes manterem um plano regular de atividades. E se você for do grupo dos que já batem carteirinha na academia, pode aproveitar a aula de FitDance para diversificar a rotina de treinos.'],
      id: 2,
    },
  ];

  public initiatePosts(): void {
    const post = this.postService.get();

    if (!post.length) {
      const storageTable: PostProxy[] = [];

      this.posts.forEach(post => {
        storageTable[storageTable.length - 1] === undefined ? post.id = 0 : post.id = storageTable[storageTable.length - 1].id + 1;
        storageTable.push(post);
      });

      localStorage.setItem('posts', JSON.stringify(storageTable));
    }
  }
}
