/*Aula
Obs.: As boas práticas serão separadas por categoria. Uma boa maneira de mostrar como aplicar uma boa prática é refatorar um código ruim.

Nomes Significativos
A primeira coisa que você pode considerar quando está codificando são os nomes. Os nomes estão por todo o software. Ao codificar, você deve considerar a nomenclatura de variáveis, funções, argumentos, classes, etc. Para isso é importante seguir algumas boas práticas:

Nomes que revelem seu propósito

Use um nome descritivo para uma intenção que possa revelar sua intenção. Deve dizer por que existe, o que faz e como é usado. Se um nome requer um comentário, então o nome não revela sua intenção.

Fora isso, ao nomear classes, use substantivos e adjetivos como Customer, Product e Student, etc. Se for uma função ou método, use verbos como getName, getTotalCount, setProductName e addCustomerName etc.

Se for uma variável, não use uma única letra como no exemplo abaixo; a menos que esteja dentro de um for, em que são usadas tradicionalmente apenas letras i, j e k como contador.

Faça distinções significativas

Use a mesma palavra para o mesmo propósito em todo o código. Por exemplo, se você tem utilizado sempre get em seus métodos que retornam o valor de algo e de repente, surge um método iniciado em fetch, o leitor pode ficar confuso se existe alguma diferença entre o métodos.

Use nomes pronunciáveis e "buscáveis"

Use palavras que podem ser pronunciadas em vez de usar palavras não pronunciadas como este exemplo. Esses tipos de nomes de variáveis são difíceis de pronunciar e ninguém será capaz de lembrá-los, exceto o próprio escritor.

Use nomes buscáveis

Se uma variável puder ser vista ou usada em vários lugares em um código, é imperativo dar a ela um nome amigável para pesquisa.

Evite a Notação Húngara

A notação húngara foi criada com o objetivo de facilitar o reconhecimento do tipo de variável por se adicionar um indicador ao fim do nome da variável. Exemplo: emailString ou emailStr. A notação húngara não é mais necessária e não agrega valor ao código, apenas polui a leitura.

Funções
Crie funções pequenas e que façam apenas uma coisa

Funções com muitas linhas tendem a ser confusas para leitura. Por isso se concentre em fazer apenas uma coisa na sua função, se necessário crie outras funções que seram chamadas dentro dela e fornecerão insumos para ela fazer o que precisa.

Evite muitas declarações de switch

Sempre que possível use polimorfismo. Vide capítulo 1

Evite utilizar muitos parâmetros

Enxugue seu método, ou utilize objetos como parâmetros. Vide capítulo 1

Evite efeitos colaterais

Os efeitos colaterais são mentiras. Sua função promete fazer uma coisa, mas também faz outras coisas ocultas. Às vezes, ele fará alterações inesperadas nas variáveis de sua própria classe ou terá um comportamento inesperado. Às vezes, ele os fará para os parâmetros passados para a função ou para os globais do sistema. Em ambos os casos, são mentiras tortuosas e prejudiciais que geralmente resultam em estranhos acoplamentos temporais e dependências de ordem, ou ocultam alguma lógica de negócios que está faltando.

Separe comando de consulta

As funções devem fazer algo ou responder algo, mas não ambos.

Prefira exceções a retorno de código de erro

Os códigos de erro geralmente são armazenados em enums e, em seguida, compartilhados em todo o projeto. Se você alterar esse enum, deverá atualizar a dependência em vários lugares. Use exceções padrão e crie as suas, caso necessário.

DRY - Don’t Repeat Yourself

A duplicação na lógica deve ser eliminada por meio de abstração. Duplicação é desperdício. Adicionar código adicional desnecessário a uma base de código aumenta a quantidade de trabalho necessária para estender e manter o software no futuro. Código duplicado aumenta a dívida técnica. Vide capítulo 1

Comentários
Comentários não compensam código ruim

Código incorreto é um dos motivos mais comuns para escrever comentários. Entretanto, comentários explicando porque seu código ruim deve ser usado não resolve seus problemas de código. "Não comente código ruim - reescreva" — Brian W. Kernighan and P. J. Plaugher

Explique-se no código

Códigos claros dizem o que fazem. É possível saber o que uma função faz apenas pelo seu nome, não faça um comentário para isso.

Comentários bons

Explicações úteis de comportamentos únicos ou contextos complexos;
Adicionar informações legais.
Comentários ruins

Atestam o óbvio;
São redundantes;
Dão avisos para outros programadores.
*/
// nao use ---  let auxiliar = [];use:pois nao e uma boa pratica usar uma variavel com valor vazio
let auxiliar;
Array(auxiliar);
