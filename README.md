# Food Order App
Desenvolvimento de um aplicativo de pedidos de comida em ReactJS - curso de ReactJS do Udemy (Maximilian Schwarzmüller).

No projeto foram aplicados os seguintes conceitos 
- criação de componentes
- utilização de portals para criação de modais
- utilização de estados para gerenciar  mudanças no conteúdo da página.
- passagem de valores entre componentes: pai -> filho e filho <- pai (lift state up)
- Uso de variáveis de contexto para simplificar passagem de valores entre componentes, principalmente para descendentes distantes. Importante para evitar o problema de "prop driling" - Passgem de uma função (ou valor) do pai para filhos de forma recorrente
- Uso de reducer para facilitar o gerenciamente de estados em CartProvider
- uso de Refs e Forward Refs
- use de useEffect para gerenciar a animação de elementos na interface: HeaderCartButton

Outro ponto interessante foi  o uso do código de um SVG para criar um componente no react.O interessante de usar dessa forma é que podemos manipular os atributos do SVG passando valores as propriedades do componente criado e também usar css para estilizar atributos mais específicos do SVG. É uma forma de usar mais flexível do que simplesmente importar o svg e usar com a tag img.


