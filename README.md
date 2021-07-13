#Pokémon GO 

Pokémon GO é uma página vitrine para os jogadores de Pokémon Go. Essa interface foi pensada para ser simples e clara, de forma que usuários iniciantes e avançados possam pesquisar os personagens por tipo, ordená-los pelo nome e conhecer a média de força. Nos baseamos nas seguintes Histórias de Usuário:

- **Como jogador iniciante de Pokémon Go, quero poder ordenar os pokémons por ordem alfabética, para que possa facilmente encontrar diferentes Pokémons.** Atendemos essa história ao criar a função de ordenar por ordem alfabética. Entendemos que essa função está pronta, quando o usuário clicar na opção desejada (A-Z ou Z-A) e automaticamente ordenar os personagens que estiverem na tela, sejam os da tela incial (todos os personagens) ou os personagens filtrados. 
    
- **Como mestre Pokémon, quero filtrar os Pokémons pelos seus tipos, para conseguir criar estratégias de jogo.** Atendemos essa história ao criar a função de filtrar por todos os tipos disponíveis na geração 1 e 2. Definimos que essa função está pronta, ao dar opções possíveis (são 16) e quando o usuário selecionar alguma, a página mostrará apenas os personagens daquele tipo. 


- **Como mestre Pokémon, preciso buscar determinado Pokémon pelo seu nome para que eu possa acessar suas principais informações.** Atendemos essa demanda criando um campo de busca por nomes. Essa função está pronta quando mostrar na tela o personagem desejado pelo usuário, ao escrever o nome e clicar no botão Buscar. Também implementamos a função auto-complete, para ajudar o usuário iniciante que pode não saber a escrita correta do nome.

- **Como mestre Pokémon, quero conhecer a média de suas estatísticas para escolher um personagem nas minhas lutas.** Atendemos essa necessidade calculando a média das estatísticas de Ataque, Defesa e Stamina e mostrando no card junto com as informações padrão. Estará pronta, ao calcular e mostrar automáticamente no card, junto com as informações padrão. 

O projeto tem como critérios mínimos a sua total funcionalidade, ter passados nos testes unitários e ter sido publicado no GitHub Pages. 

Nosso protótipo inicial foi pensado assim:

<img src="image/protótipo.png" alt="Protótipo de baixa fidelidade">

Nossos testes de usabilidade nos fez alterar a forma como dispomos as informações no card, o número de personagens exibidos na tela inicial,uma breve descrição do que é o site na tela inicial e a criação dos botões Mostrar Mais e Mostrar tudo.
