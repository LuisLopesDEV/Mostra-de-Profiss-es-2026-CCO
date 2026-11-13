# Mostra de Profissões — CACCO

Duas atividades de Ciência da Computação para a IV Mostra de Profissões da UNIFEI Itabira.

- **Corte no Ar** — corte frutas e evite o Gaguinho com o indicador ou com o mouse.
- **Polígonos 3D** — deforme e gire sólidos com gestos da mão ou com o mouse.

## Abrir no estande

1. No Windows, clique com o botão direito no ZIP e escolha **Extrair Tudo**. O computador precisa ter Node.js instalado.
2. Na pasta extraída, encontre **Jogar.cmd** ao lado das pastas `scripts/` e `dist/`. Dê dois cliques em **Jogar.cmd** e mantenha a janela do terminal aberta.
3. Se o navegador não abrir automaticamente, acesse **http://127.0.0.1:4173/** no Chrome ou Edge.
4. Escolha uma atividade no lobby. O botão **← Lobby** permite trocar de atividade.

Em Linux ou macOS, abra o terminal na pasta extraída e execute `node scripts/jogar.mjs`.

O pacote traz o jogo compilado e os arquivos do MediaPipe. O servidor local permite usar as atividades sem instalar dependências npm e sem conexão à internet.

## Corte no Ar

Na preparação da webcam, escolha **Indicador** ou **Palma da mão**. A câmera tem uma margem de acerto de 15 pixels nas frutas e 5 pixels no Gaguinho. O mouse usa 5 pixels para os dois alvos. A margem e a opção de palma ficam em `src/config.ts`.

Cada fruta vale 10 pontos e acertar o Gaguinho desconta 20. No fim da rodada, informe um nome ou apelido e clique em **Salvar pontos**. O ranking guarda as dez melhores partidas neste navegador e pode ser aberto pelo menu ou pela tela de resultado.

Para comparar os controles no notebook da Mostra, abra **http://127.0.0.1:4173/corte.html?debug=1**. O painel informa os FPS do vídeo, as posições confirmadas por segundo e o tempo de análise e chegada. O JSON exportado inclui a trajetória e o ponto de controle escolhido.

## Polígonos 3D

Clique em **Ativar webcam** e permita o acesso. Mostre o polegar e o indicador inteiros na imagem. Junte os dois dedos sobre um vértice amarelo e mova a mão para deformar o sólido. Faça a pinça com as duas mãos e mova ou afaste as mãos para girar e ampliar. Uma pinça fora dos vértices também permite girar. A roda colorida muda a cor do sólido.

Com o mouse, arraste os vértices para deformar e arraste fora dos vértices para girar. Use a roda do mouse ou os botões **−** e **+** para ajustar o zoom. Use **Restaurar** para voltar à forma inicial. Os botões de seleção permitem trocar entre cubo, pirâmide e octaedro.

## Editar o projeto

Use Node.js 24 ou superior. Abra a pasta do projeto no terminal.

```bash
npm ci
npm run dev
```

No PowerShell, use `npm.cmd ci` e `npm.cmd run dev`. Abra o endereço exibido no terminal. Execute `npm run check` para verificar o código, executar os testes e gerar a versão compilada em `dist/`.

- `index.html` e `src/lobby.ts` — lobby.
- `corte.html` e `src/match-controller.ts` — Corte no Ar.
- `poligonos.html` e `src/poligonos/` — cena 3D e controles.
- `src/style.css` e `src/mostra.css` — identidade visual.
- `public/vision/` — modelo e execução local do MediaPipe.

## Créditos

Identidade do CACCO e rastreamento de mãos com MediaPipe Tasks Vision. A atividade Polígonos 3D foi inspirada na demonstração *Editing 3D shape vertices and rotation* do projeto Shape Creator. Consulte `CREDITOS.txt` e `LICENSE-MediaPipe.txt`. [Shape Creator](https://github.com/collidingScopes/shape-creator-tutorial)
