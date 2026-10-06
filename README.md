# 📮 Consulta de CEP com React Native

Aplicativo de estudo para consultar endereços a partir de um CEP usando React Native, Expo e a API pública do ViaCEP.

## 📚 Sobre o projeto 

Este projeto foi desenvolvido durante minhas aulas de **Programação Mobile** para estudar o consumo de APIs com React Native. O ViaCEP foi usado como base para praticar uma requisição HTTP, receber dados no formato JSON e apresentar o resultado em uma interface móvel.

A aplicação permite digitar um CEP, enviar a consulta e exibir os dados retornados pelo serviço. É um projeto didático: não possui servidor próprio nem salva o histórico das consultas.

## 🗺️ Funcionalidades

- Campo de texto para digitar o CEP.
- Consulta ao endpoint do ViaCEP usando uma requisição `GET`.
- Leitura da resposta JSON e armazenamento do resultado no estado do React.
- Exibição das informações retornadas para o CEP consultado.
- Interface rolável para que o resultado e os textos informativos possam ser percorridos em telas menores.

## 🛠️ Tecnologias e dependências

- **React Native 0.76** para a interface móvel.
- **React 18** para componentes e estado.
- **Expo SDK 52** para iniciar e executar o aplicativo.
- **Axios** para fazer a requisição HTTP.
- **JavaScript e JSX** para implementar a aplicação.
- **StyleSheet** do React Native para organizar os estilos.

## 📋 Requisitos 

- Node.js e npm instalados.
- Expo Go em um celular compatível, ou um emulador Android/iOS configurado.
- Acesso à internet no dispositivo, pois a consulta ao ViaCEP é feita online.

Confira as instalações no terminal:

```bash
node --version
npm --version
```

## 🚀 Instalação e execução

Abra o terminal na pasta raiz do projeto — a pasta que contém `package.json` — e instale as dependências listadas no arquivo de lock do npm:

```bash
npm ci
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

O Expo exibirá um QR code e opções para abrir o aplicativo. Escaneie o QR code com o Expo Go em um dispositivo compatível ou selecione um emulador disponível. Mantenha o terminal e o servidor Expo abertos durante o uso.

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

### Android 

Com um emulador Android em execução ou um dispositivo configurado:

```bash
npm run android
```

Esse script executa `expo start --android`: inicia o servidor Expo e tenta abrir o projeto no Android conectado/emulado. Para usar um celular físico, instale o Expo Go e siga as instruções do terminal.

### iOS

Em um Mac com Xcode configurado:

```bash
npm run ios
```

O script executa `expo start --ios` e tenta abrir o aplicativo em um simulador ou dispositivo iOS disponível.

### Web

O projeto também oferece execução via navegador:

```bash
npm run web
```

Esse comando executa `expo start --web`. A consulta HTTP ao ViaCEP requer conexão com a internet também na plataforma web.

## 🔄 Como a consulta funciona 

1. O componente `App` guarda o CEP digitado no estado `cep`, iniciado como texto vazio.
2. O `TextInput` atualiza esse estado por meio da propriedade `onChangeText`.
3. Ao tocar em **Enviar**, a função `consumirAPI` solicita os dados com Axios usando o endpoint `https://viacep.com.br/ws/{CEP}/json`.
4. A resposta recebida é armazenada no estado `data`.
5. Quando `data` contém um resultado, os campos de endereço são apresentados na tela.

O CEP informado ao ViaCEP deve conter oito dígitos. A API retorna os dados em JSON; para um CEP inexistente, a resposta pode conter a propriedade `erro`.

### Exemplo de endpoint 

Uma consulta pode ser feita diretamente pelo navegador ou por uma ferramenta HTTP:

```text
https://viacep.com.br/ws/01001000/json
```

O serviço responde com campos como `cep`, `logradouro`, `complemento`, `bairro`, `localidade`, `uf`, `ibge`, `gia`, `ddd` e `siafi`, dependendo dos dados disponíveis.

## 🧩 Componentes e arquivos

- **`App.js`**: componente principal e tela da aplicação. Mantém os estados `cep` e `data`, monta a URL de consulta, faz a requisição e exibe o resultado.
- **`ScrollView`**: permite rolar a tela quando o conteúdo excede a área visível.
- **`View`**: organiza as áreas do layout, incluindo o contêiner, o logo e os dados do endereço.
- **`Image`**: mostra o logo do ViaCEP carregado de uma URL remota.
- **`TextInput`**: recebe o CEP digitado e mantém o valor sincronizado com o estado.
- **`Button`**: inicia a consulta ao ser pressionado.
- **`Text`**: apresenta rótulos, dados da resposta e notas explicativas sobre GIA e SIAFI.
- **`Style.js`**: centraliza as regras visuais usadas em `App.js`, como a cor de fundo, o tamanho do logo, o estilo do campo e a área de resultado.
- **`index.js`**: registra `App` como componente raiz do Expo por meio de `registerRootComponent`.
- **`app.json`**: define configurações do Expo, como nome, orientação retrato, ícones, tela de abertura e favicon.
- **`assets/`**: contém os recursos gráficos configurados para ícone do aplicativo, splash screen e navegador.
- **`package.json`**: declara scripts e dependências do projeto.

## 🧾 Campos exibidos e observações sobre a implementação

A tela tenta apresentar CEP, logradouro, complemento, bairro, localidade, UF, IBGE, GIA, DDD e SIAFI. O código atual consulta `data.lougradouro`, mas a propriedade correta retornada pelo ViaCEP é `data.logradouro`; por isso, o logradouro pode aparecer vazio até que esse nome seja corrigido em `App.js`.

No momento, a aplicação não valida o formato do CEP antes de consultar, não exibe uma mensagem específica para CEP inválido ou falha de rede e não mostra estado de carregamento. A requisição é executada diretamente na função chamada pelo botão. Essas limitações são úteis para identificar próximos passos no exercício de consumo de APIs.

## ⚙️ Scripts disponíveis 

| Comando | Ação |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento do Expo. |
| `npm run android` | Inicia o Expo e tenta abrir o projeto no Android. |
| `npm run ios` | Inicia o Expo e tenta abrir o projeto no iOS. |
| `npm run web` | Inicia a aplicação na plataforma web do Expo. |

## 🔐 Limitações e privacidade 

- O aplicativo envia o CEP digitado ao serviço externo do ViaCEP para realizar a consulta.
- É necessário ter conexão à internet para receber os dados.
- Não há backend, banco de dados, autenticação ou histórico persistente neste projeto.
- Evite inserir informações pessoais além do CEP necessário para o teste.
