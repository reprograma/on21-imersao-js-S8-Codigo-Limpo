/*
Aula
Conceito
Clean Code é uma filosofia de desenvolvimento cuja o principal objetivo é aplicar técnicas simples que visam facilitar a escrita e leitura de um código, tornando-o de fácil compreensão e revelando a sua real intenção. Código limpo é reconhecer que seu público não é apenas um computador, são humanos reais!

Motivação
Fundamental: 
 A implementação de princípios de código limpo é uma habilidade fundamental que vale a pena especialmente quando é hora de refatorar o código ou testar o código.

Ler é difícil -  Ao se deparar com um código pronto, é tentador reescrever em vez de fazer o trabalho duro de ler e compreender o que foi feito. Se você escrever código que mal consegue seguir enquanto o escreve, descobrirá que não conseguirá compreender tudo mais tarde.

Dívida técnica é deprimente. Escrever código desleixado ou confuso cria dívidas técnicas. Você provavelmente obterá mais satisfação no trabalho com a qualidade do seu trabalho do que com a quantidade. A história mostrou que é improvável que você encontre tempo para refatorar seu código mais tarde, então faça certo da primeira vez.

Benefícios
Melhor uso do seu tempo:  O primeiro beneficiário do código limpo é o próprio programador. É fácil esquecer as coisas que você fez, linhas de código limpas facilitam as alterações.

Integração mais fácil para novos membros da equipe :  O uso de princípios de código limpo ajuda a integrar um novo programador. Não há necessidade de documentação para entender o código; o novo programador pode aprender diretamente nele.

Depuração mais fácil:  Quer você escreva código sujo ou limpo, os bugs são inevitáveis. Mas o código limpo o ajudará a depurar mais rapidamente, independentemente de quanta experiência ou conhecimento você tenha.

Manutenção mais eficiente:  À medida que qualquer projeto cresce, ele precisará de novos recursos ou alterações nos recursos existentes. O código limpo torna a manutenção relativamente rápida e fácil.

Regra do Escoteiro
Essa é o passo número 8 do livro "97 Things Every Programmer Should Know" de Kevlin Henney. A "regra do escoteiro" foi pensada por Robert C. Martin (grande referência em qualidade de software) a partir de uma regra existente para os escoteiros: "Sempre deixe o acampamento mais limpo do que o encontrou". Quando você encontrar uma bagunça no chão, limpe-a, não importa quem fez isso. Seu trabalho é sempre deixar o chão mais limpo para os próximos campistas. Aplicando esse princípio a programação teríamos algo como: "Sempre deixe o código em que você está trabalhando melhor do que encontrou". Se todos os desenvolvedores envolvidos em um projeto seguissem essa abordagem, o sistema melhoraria gradualmente. A limpeza é aproximar-se da melhoria e não da perfeição a cada passo.

Code smells/Bad smells
Code Smell é qualquer característica no código-fonte de um programa que possivelmente indica um problema mais profundo. O termo foi usado pela primeira vez por Kent Beck nos anos 90, mas foi em 1999 que ele ganhou mais popularidade ao ser apresentado no livro "Refactoring: improving the design of existing code", de Martin Fowler.

É uma metáfora semelhante ao ditado "onde há fumaça, há fogo", o Code Smell é a fumaça que indica a existência de um problema maior. Code Smells não são bugs, eles indicam pontos fracos que podem ocasionar falhas no presente ou no futuro.

Tipos
Obs.: Existem outras categorias e outros smells não listados aqui. Por questões de tempo, consideramos mostrar obrigatoriamente alguns dos mais comuns na vida de um desenvolvedor.

Obs.: Para as tratativas de code smells dê uma olhada nos links de referência do site refactoring.guru, nele há exemplos de código, como e porquê refatorar.

Inchaços (Bloaters)
Bloaters são códigos, métodos e classes que aumentaram para proporções tão gigantescas que são difíceis de trabalhar. Normalmente, esses cheiros não surgem imediatamente, mas se acumulam ao longo do tempo à medida que o programa evolui (e especialmente quando ninguém faz um esforço para erradicá-los).

Método longo (Long Method)

Um método contém muitas linhas de código. Algo está sempre sendo adicionado a um método, mas nada é retirado. Mentalmente, muitas vezes é mais difícil criar um método novo do que adicionar a um já existente: "Mas são apenas duas linhas, não adianta criar um método inteiro só para isso". Como é mais fácil escrever código do que lê-lo, esse "cheiro" permanece despercebido até que o método se transforme em uma bloco gigante de código.

Como regra geral, se você sentir a necessidade de comentar algo dentro de um método, você deve pegar esse código e colocá-lo em um novo método. Mesmo uma única linha pode e deve ser dividida em um método separado, se exigir explicações. E se o método tiver um nome descritivo, ninguém precisará olhar o código para ver o que ele faz.

Correções: Crie novos métodos a partir de blocos de código que fazem tarefas específicas; crie objetos para que encapsule numerosas variáveis relacionadas; substitua verificações complicadas em condicionais ou loops por métodos.

Classe grande (Large Class)

Uma classe contém muitos campos/métodos/linhas de código. As classes geralmente começam pequenas. Mas com o tempo, elas ficam "inchadas" à medida que o programa cresce. É o mesmo caso de métodos longos, os programadores geralmente acham mentalmente menos cansativo colocar um novo recurso em uma classe existente do que criar uma nova classe para o recurso.

Correções: Crie novas classes de acordo com responsabilidades relevantes existentes na classe original; se uma classe tem muitas implementações de diferentes comportamentos para a mesma funcionalidade, opte por criar uma estrutura de herança.

Lista de parâmetros longa (Long Parameter List)

Uma longa lista de parâmetros pode acontecer depois que vários tipos de algoritmos são mesclados em um único método. Uma longa lista pode ter sido criada para controlar qual algoritmo será executado e como. Longas listas de parâmetros também podem ser o subproduto dos esforços para tornar as classes mais independentes umas das outras. É difícil entender essas listas, que se tornam contraditórias e difíceis de usar à medida que crescem.

Correções: Verifique quais valores são passados para os parâmetros. Se alguns dos argumentos forem apenas resultados de chamadas de método de outro objeto, essas chamadas podem ser feitas dentro do método; ao invés de passar um grupo de dados recebidos de outro objeto como parâmetros, passe o próprio objeto para o método; se houver vários elementos de dados não relacionados, você pode mesclá-los em um único objeto criado unicamnete para ser pasasdo como parâmetro.

Abusadores do OO (Object Orientation Abusers)
São aplicações incompletas ou incorretas dos princípios de programação orientada a objetos.

Declarações de Switch (Switch Statements)

Você tem um operador switch complexo ou uma grande sequência de instruções if. O uso relativamente raro de operadores switch e case é uma das características do código orientado a objetos. Muitas vezes, o código para um único switch pode ser espalhado em diferentes locais do programa. Quando uma nova condição é adicionada, você precisa encontrar todo o código do switch e modificá-lo.

Como regra geral, quando você vê switch, deve pensar em polimorfismo.

Correções: Substitua códigos fixos ou booleanos que determinam um tipo (exemplo, ter um atributo isAdmin e outro isVisitor) por subclasses; ou substitua códigos fixos ou booleanos que determinam um tipo por um objeto que determine o tipo e utilize composição; substitua testes com null por objetos que retornem valores esperados para casos nulos.

Classes alternativas com interfaces diferentes (Alternative Classes with Different Interfaces)

Duas classes executam funções idênticas, mas têm nomes de métodos diferentes. O programador que criou uma das classes provavelmente não sabia que já existia uma classe funcionalmente equivalente.

Correções: Renomeie os métodos para torná-los iguais; se possível refatore a assinatura dos métodos; caso faça sentido, crie uma classe pai e torne as classes existentes classes filhas; caso as classes façam exatamente a mesma coisa, considere apagar uma delas.

Inibidores de mudança (Change Preventers) Opcional
Se você precisar alterar algo em um local do seu código, também precisará fazer muitas alterações em outros locais. O desenvolvimento de programas torna-se muito mais complicado e caro como resultado.

Dispensáveis (Dispensables)
É algo inútil e desnecessário cuja ausência tornaria o código mais limpo, mais eficiente e mais fácil de entender.

Código duplicado (Duplicate Code)

A duplicação geralmente ocorre quando vários programadores estão trabalhando em diferentes partes do mesmo programa ao mesmo tempo. Como eles estão trabalhando em tarefas diferentes, eles podem não saber que seu colega já escreveu um código semelhante que pode ser reaproveitado para suas próprias necessidades.

Há também uma duplicação mais sutil, quando partes específicas do código parecem diferentes, mas na verdade executam o mesmo trabalho. Esse tipo de duplicação pode ser difícil de encontrar e corrigir.

Às vezes, a duplicação é proposital. Ao se apressar para cumprir os prazos e o código existente estiver “quase certo” para o trabalho, os programadores iniciantes podem não resistir à tentação de copiar e colar o código relevante. E, em alguns casos, o programador é simplesmente muito preguiçoso para reorganizar.

Correções: (1) Se o mesmo código for encontrado em dois ou mais métodos da mesma classe: extraia o método e faça chamadas para o novo método em ambos os locais. (2) Se o mesmo código for encontrado em duas subclasses do mesmo nível: extraia o método para ambas as classes e mova para uma superclasse; Se o código duplicado estiver dentro de um construtor, grite um construtor comum em uma superclasse; Se o código duplicado for semelhante, mas não completamente idêntico, mova a parte idêntica para um método na superclasse e deixe a implementação de partes diferentes nas subclasses; Se dois métodos fazem a mesma coisa, mas usam algoritmos diferentes, selecione o melhor algoritmo e use-o. (3) Se o código duplicado for encontrado em duas classes diferentes: Se as classes não fizerem parte de uma hierarquia, crie uma única superclasse para essas classes que mantenha toda a funcionalidade anterior; Se for difícil ou impossível criar uma superclasse, extraia o código duplicado para uma nova classe e use o novo componente nas demais.

Classe preguiçosa (Lazy Class)

Talvez uma classe tenha sido projetada para ser totalmente funcional, mas depois de algumas refatorações ela se tornou ridiculamente pequena. Ou talvez tenha sido projetado para apoiar o trabalho de desenvolvimento futuro que nunca foi feito.

Correções: Componentes que são quase inúteis devem ser movidos para a classe que os utiliza; Para subclasses com poucas funções, tente mesclar com uma classe correlacionada; mate-a.

Código morto (Dead Code)

Quando os requisitos do software mudaram ou foram feitas correções, ninguém teve tempo de limpar o código antigo. Tal código também pode ser encontrado em condicionais complexas, quando uma das ramificações se torna inacessível (devido a erro ou outras circunstâncias).

Correções: Excluir código não utilizado e arquivos desnecessários; No caso de uma classe desnecessária, métodos/campos de movimentação ou classe de mesclagem podem ser aplicados se uma subclasse ou superclasse for usada; Remova parâmetros desnecessários.

Acopladores, (Couplers) Opcional
Todos os cheiros neste grupo contribuem para o acoplamento excessivo entre classes ou mostram o que acontece se o acoplamento for substituído por delegação excessiva.



*/
function calcular(){
let z = 2022;
let x = 1996;

let u = z - x;
console.log(u);
}

// calculo com variável
function calcularIdade(){

    let anoAtual = 2022;
    let anoNascimento = 1984;

    console.log(anoAtual - anoNascimento);
}

// calculo com parâmetros 
function calcularIdade(anoAtual, anoNascimento){

    anoAtual = 2022;
    anoNascimento = 1984;

    return (anoAtual - anoNascimento);
}

function media(){
let um = 8;
let dois = 10;

let media = um + dois % 2;

console.log(media);

}

function contar() {

    let cont = 1
    while (cont <= 10) {
    console.log(cont++)
        
    }
   
}