# 🚗 Buscador de Carros

[Acessar Site](https://imoutofbounds.github.io/Buscador-de-Carros/)

## ⚙️ Decisões  Tecnicas
Para esta aplicação, foi escolhida a tecnologia React para o recebimento e demonstração dos dados apresentados, pois o Node é um framework ja estabelecido no mercado, além de toda sua capacidade de gerenciamento de estado, que é uma das principais funcionalidades da plataforma, principalmente observado durante as pesquisas de veículos.

O Type Script tambem foi escolhido, juntamente a biblioteca Styled components, com o objetivo de garantir a tipagem estática e o uso de interfaces nos componentes que possuem logica acoplada, fazendo com que o cast de dados indesejados ocorra mais dificilmente.

Como a aplicação atual é um monolito, e apenas a leitura da base de dados sample foi realizada, toda a logica de leitura e organização dos dados esta imbutida no app React. Mas, para melhorar a escalabilidade, e com mais tempo, criaria uma API em SpringBoot, pois a linguagem Java oferece uma maior previsibilidade e estabilidade no que se refere a leitura e gravação de dados, devido a sua alta verbosidade. 

## 💼 Plano de Negócios

### 1. Se você fosse lançar esse buscador no mercado, qual seria seu modelo de negócios?
Eu seguiria um plano parecido com o mercado livre, permitindo que pessoas possam anunciar seus veículos ou negociar a compra com outros usuários. A monetização viria por meio de uma taxa de inscrição para os vendedores, com cada anúncio gerando uma comissão, a qual seria um percentual do valor anunciado do veículo.

### 2. Como você atrairia seus primeiros usuários? (Estratégia de aquisição, canais, etc)
Por meio de anuncios na internet, buscando principalmente a trasmissão das campanhas em páginas e programas relacionados ao mundo automotivo. Também ofereceria vouchers limitados de primeiro uso, possibilitando que anunciantes possam testar a plataforma de maneira gratuita pela primeira vez. 

### 3. Qual seria sua estimativa de CAC (Custo de Aquisição de Cliente)?
A formula do CAC é:

$$
\text{CAC} = \frac{\text{Custo Total com Marketing e Vendas}}{\text{Número de Clientes Adquiridos}}
$$

Considerando que o Google Ads recomenda um orçamento diário de R$ 20,00 para o Youtube, e R$ 30,00 para o Instagram. Em um mês seriam gastos R$ 600,00 reais com propagandas no Youtube e R$ 900,00 com o instagram, totalizando R$ 1500,00. Caso conseguissemos atrair 10 clientes por mês, teriamos um CAC inicial estimado de:

$$
\frac{1500}{10} = 150
$$

### 4. Qual seria sua proposta de LTV (Lifetime Value) e como você maximizaria isso?
A proposta seria sempre buscar encontrar novos clientes, uma vez que um carro é um bem que não é adiquirido com tanta frequência, e para isso teríamos um sistema de recomendações, recompensando pessoas da plataforma ao recomendarem uma compra ou uma incrição de veículo para outra pessoa, oferecendo pontos que gerariam descontos em compras futuras. Desta forma, manteríamos clientes anteriores e sempre renovariamos a base de usuários, eventualmente reduzindo o CAC.

### 5. Que tipo de monetização você considera viável para essa aplicação?
A aplicação de comissões por venda e a aplicação de anúncios.

### 6. Há alguma estratégia de retenção de usuários que você aplicaria?
Além das recompensas por recomendação, faria eventuais sorteios para os membros que se encaixem em alguns termos, como tempo de uso do site ou número de recomendações.

## ✏️ Mockup do projeto

![alt text](img/mockup.png)

## 🖥️ Executar projeto localmente

Após clonar o repositório, abra o terminal e digite o comando

```bash
npm install
```

Ao terminar de baixar os node_modules, inicie o programa digitando

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Então, abra [http://localhost:3000](http://localhost:3000) em um navegador de preferência.