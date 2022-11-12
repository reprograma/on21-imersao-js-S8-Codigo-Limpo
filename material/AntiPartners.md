# Clean Code - AntiPartiners

## Conceito
AntiPatterns são simplesmente padrões de projeto que, em muitos casos, introduzem mais problemas do que resolvem. Às vezes, esses são padrões de codificação, enquanto outros descrevem problemas dentro de equipes ou organizações.

Os AntiPatterns fornecem experiência do mundo real no reconhecimento de problemas recorrentes na indústria de software e fornecem uma solução detalhada para os problemas mais comuns. Os AntiPatterns destacam os problemas mais comuns enfrentados pela indústria de software e fornecem as ferramentas para permitir que você reconheça esses problemas e determine suas causas subjacentes.

Além disso, AntiPatterns apresentam um plano detalhado para reverter essas causas subjacentes e implementar soluções produtivas. Os AntiPatterns descrevem efetivamente as medidas que podem ser tomadas em vários níveis para melhorar o desenvolvimento de aplicativos, o design de sistemas de software e o gerenciamento eficaz de projetos de software.

## Anti-patterns mais praticados
### Código espaguete (Spaghetti Code)
Refere-se ao código que tem um emaranhado, especialmente aquele em que é difícil seguir o fluxo real do programa. A codificação e as extensões progressivas comprometem a estrutura do software de tal forma que a estrutura não tem clareza, mesmo para o desenvolvedor original, se ele estiver longe do software por qualquer período de tempo.

#### Causas típicas:

Inexperiência com tecnologias de design orientado a objetos;
Revisões de código ineficazes;
Nenhum projeto antes da implementação;
Frequente resultado de desenvolvedores trabalhando isoladamente.

#### Consequências:

O código é difícil de reutilizar e, quando o é, geralmente é por meio de clonagem. Em muitos casos, no entanto, o código nunca é considerado para reutilização.
Os benefícios da orientação a objetos são perdidos; a herança não é usada para estender o sistema; polimorfismo não é usado.
Esforços de manutenção subsequentes contribuem para o problema.
O esforço envolvido na manutenção de uma base de código existente é maior do que o custo de desenvolver uma nova solução desde o início.

### Programação "Copia e Cola" (Cut-And-Paste Programming)
A programação recortar e colar é uma forma muito comum, mas degenerada, de reutilização de software que cria pesadelos de manutenção. Vem da noção de que é mais fácil modificar o software existente do que programar do zero. Isso geralmente é verdade e representa bons instintos de software, no entanto, reaproveitamento de código não é sobre apenas copiar códigos prontos.

#### Causas típicas:

É preciso muito esforço para criar código reutilizável, e a organização enfatiza o retorno de curto prazo mais do que o investimento de longo prazo.
A organização não defende ou recompensa componentes reutilizáveis, e a velocidade de desenvolvimento ofusca todos os outros fatores de avaliação.
Falta de conhecimento de abstração entre os desenvolvedores, muitas vezes acompanhada por uma má compreensão de herança, composição e outras estratégias de desenvolvimento.
Componentes reutilizáveis, uma vez criados, não são suficientemente documentados ou disponibilizados prontamente para os desenvolvedores.
Falta ou visão de futuro entre as equipes de desenvolvimento.

#### Consequências:
As linhas de código aumentam sem aumentar a produtividade geral.
Torna-se difícil localizar e corrigir todas as instâncias de um erro específico.
Custos excessivos de manutenção de software.
Defeitos de software são replicados através do sistema.
Os desenvolvedores criam várias correções exclusivas para bugs sem nenhum método de resolver as variações em uma correção padrão.
Classe deus (The God Class ou The Blob)
Encontrado em designs em que uma classe monopoliza o processamento e outras classes encapsulam principalmente os dados. Este AntiPattern é caracterizado por um diagrama de classes composto por uma única classe de controlador complexa cercada por classes de dados simples. O principal problema aqui é que a maioria das responsabilidades são alocadas a uma única classe.

#### Causas típicas:
Falta de uma arquitetura orientada a objetos.
Falta de (qualquer) arquitetura.
Falta de execução da arquitetura planejada.
Preguiça, os desenvolvedores tendem a adicionar pequenos pedaços de funcionalidade às classes de trabalho existentes, em vez de adicionar novas classes.

#### Consequências:
Compromete as vantagens inerentes de um design orientado a objetos.
As modificações na classe deus afetam todo o software.
Modificações em outros objetos no sistema também podem ter impacto profundo no software do Blob.
A classe deus é normalmente muito complexa para reutilização e teste.
A classe deus pode ser cara para carregar na memória, usando recursos excessivos, mesmo para operações simples.

### Strings mágicas (Magic Strings)
Strings mágicas são valores de string especificados diretamente no código do aplicativo que têm impacto no comportamento do aplicativo. Frequentemente, essas strings acabam sendo duplicadas no sistema e, como não podem ser atualizadas automaticamente usando ferramentas de refatoração, elas se tornam uma fonte comum de bugs quando são feitas alterações em algumas strings, mas não em outras.

#### Causas típicas:
Preguiça.
Falta ou visão de futuro entre as equipes de desenvolvimento.
Falta de utilização de arquivos de configuração ou de tabelas de configuração.

#### Consequências:
Tornam a manutenção mais onerosa.
Perda de contexto de regras de negócio.