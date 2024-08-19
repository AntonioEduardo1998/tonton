# Tonton

Este é um aplicativo mobile criado com [Expo](https://expo.dev/) e [React Native](https://reactnative.dev/) utilizando TypeScript. O objetivo do aplicativo é permitir que os usuários visualizem uma lista de jogos e adicionem itens ao carrinho de compras.

## Funcionalidades

- **Products**: Módulo para listagem de produtos/jogos disponíveis.
- **ShoppingCart**: Módulo para exibir os produtos/jogos adicionados ao carrinho de compras.
- Consumo da API [CheapShark](https://apidocs.cheapshark.com/) para obter dados de preços de jogos.

## Tecnologias Utilizadas

- **Expo**: Framework para desenvolvimento de aplicativos React Native.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **React Native**: Framework para desenvolvimento de aplicativos móveis utilizando React.
- **@reduxjs/toolkit**: Ferramenta para gerenciamento de estado no Redux de forma simplificada e eficiente.
- **styled-components**: Biblioteca para estilização de componentes utilizando CSS-in-JS.
- **react-native-toast-message**: Biblioteca para exibição de mensagens toast no aplicativo.
- **@react-navigation/native**: Biblioteca para navegação entre telas no aplicativo React Native.
- **jest**: Framework de testes em JavaScript.
- **@testing-library/react-hooks**: Biblioteca para teste de hooks do React.
- **eslint**: Ferramenta para identificar e relatar padrões encontrados no código JavaScript.
- **prettier**: Ferramenta para formatar o código de acordo com regras predefinidas.


## Requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [Android Studio](https://developer.android.com/studio) (para testar o aplicativo em um emulador Android)
- [Git](https://git-scm.com/)
- [Expo Go](https://expo.dev/client) (para testar o aplicativo em um dispositivo móvel)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/AntonioEduardo1998/tonton
    ```
2. Instale as dependências:
    ```bash
    yarn install

    # ou

    npm install
    ```
3. Inicie o aplicativo:
    ```bash
    npm run android
    ```

## Testes

Para executar os testes, utilize o comando:
```bash
npm run test
```

## Estrutura de Pastas

```bash
src
├── @types # Tipos globais
├── components # Componentes reutilizáveis
├── hooks # Hooks customizados
├── modules # Módulos da aplicação
│   ├── Products # Módulo de listagem de produtos
│   ├── ShoppingCart # Módulo de carrinho de compras
├── routes # Configuração de rotas
├── services # Configuração de serviços
├── store # Configuração do Redux
├── tests # arquivos de apoio para testes
├── theme # Tema global da aplicação
├── utils # Funções utilitárias
```

## Arquitetura

A arquitetura do aplicativo foi baseada no conceito de módulos, onde cada módulo é responsável por uma funcionalidade específica, neste caso, `Products` e `ShoppingCart`. Cada módulo possui sua própria pasta contendo os componentes, hooks, estilos, testes e lógica de negócio relacionados à funcionalidade. Se mais módulos fossem adicionados, a estrutura do aplicativo continuaria organizada e escalável.