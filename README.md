# Mostra de Profissões 2026 — CACCO

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.3.7-646CFF?logo=vite&logoColor=white)
![MediaPipe](https://img.shields.io/badge/MediaPipe_Tasks_Vision-1.2.2-00897B)

Aplicação web desenvolvida para o estande do **Centro Acadêmico de Ciência da Computação (CACCO)** na **IV Mostra de Profissões da UNIFEI — Campus Itabira**. O lobby reúne duas atividades interativas que podem ser usadas com a webcam ou com o mouse.

## 🎮 Atividades

### Corte no Ar

Jogo inspirado em *Fruit Ninja*. Use o indicador, a palma da mão ou o mouse para mover a lâmina, cortar frutas e desviar do Gaguinho.

- Cada rodada dura **45 segundos**. Uma fruta vale **10 pontos** e acertar o Gaguinho desconta **20 pontos**.
- É possível pausar e retomar a partida e jogar em tela cheia.
- Ao final da rodada, informe um nome ou apelido e clique em **Salvar pontos**. O recorde e as dez melhores pontuações ficam salvos no navegador.
- No servidor local, abra `/corte.html?debug=1` para medir os FPS da câmera e o tempo de análise. O painel também permite gravar e reproduzir trajetórias e exportá-las em JSON.

### Polígonos 3D

Escolha um **cubo**, uma **pirâmide** ou um **octaedro** e mova os vértices para ver como o sólido muda. Ao ativar a webcam, o sólido aparece sobre a imagem da câmera.

| Ação | Webcam | Mouse |
| --- | --- | --- |
| Deformar | Junte o polegar e o indicador sobre um vértice amarelo e arraste. | Arraste um vértice amarelo. |
| Girar | Faça uma pinça fora dos vértices e mova a mão, ou mova as duas mãos em pinça. | Arraste fora dos vértices. |
| Ajustar o zoom | Faça uma pinça com cada mão e aproxime ou afaste as mãos. | Use a roda do mouse ou os botões **−** e **+**. |
| Mudar a cor | Faça uma pinça sobre a roda de cores. | Clique na roda de cores. |

O botão **Restaurar** recupera a forma, a orientação e o zoom iniciais.

## 🛠 Tecnologias utilizadas

- TypeScript, HTML5 e CSS3
- Vite para desenvolvimento e compilação
- MediaPipe Tasks Vision e WebAssembly para rastreamento de mãos
- Web Workers para processar o rastreamento em segundo plano
- Canvas API para desenhar o jogo e projetar os sólidos 3D na tela
- Node.js e npm para execução local e tarefas de desenvolvimento

## 🧠 Conceitos aplicados

- Detecção dos pontos das mãos e reconhecimento de gestos de pinça.
- Física básica com velocidade, gravidade e trajetórias no Corte no Ar.
- Detecção de colisões por segmentos de reta e compensação da latência com o histórico de posições dos alvos.
- Projeção em perspectiva, rotação e manipulação de vértices em 3D.
- Persistência do ranking e do recorde com `localStorage`.

## ▶ Como executar

### Em desenvolvimento

Instale o **Node.js 24** (recomendado), clone o repositório e execute na raiz do projeto.

```bash
npm ci
npm run dev
```

Abra o endereço exibido no terminal e escolha uma atividade. Use **← Lobby** para trocar de atividade. Permita o acesso à webcam para usar os controles por gestos. O navegador processa as imagens no próprio dispositivo.

Se o PowerShell bloquear `npm`, use `npm.cmd` nos comandos.

### Versão compilada e uso no estande

Depois de instalar as dependências, gere a pasta `dist/` e inicie o servidor local.

```bash
npm run build
npm run jogar
```

Abra [http://127.0.0.1:4173/](http://127.0.0.1:4173/) no Chrome ou no Edge e mantenha o terminal aberto durante o uso.

Se você tem o ZIP do estande, extraia o pacote inteiro. No Windows, abra `Jogar.cmd`. No Linux ou no macOS, execute `node scripts/jogar.mjs` na pasta extraída. O pacote inclui `dist/` e os arquivos do MediaPipe. Com o Node.js instalado, é possível usar as duas atividades sem internet e sem instalar dependências pelo npm.

### Verificações

O comando abaixo executa o lint, os testes de regressão e a compilação.

```bash
npm run check
```

## 📁 Estrutura do projeto

| Caminho | Função |
| --- | --- |
| [`index.html`](index.html) e [`src/lobby.ts`](src/lobby.ts) | Lobby de seleção das atividades. |
| [`corte.html`](corte.html) e [`src/match-controller.ts`](src/match-controller.ts) | Interface, controles e fluxo da partida. |
| [`src/game.ts`](src/game.ts) e [`src/render.ts`](src/render.ts) | Física, colisões, pontuação e desenho da arena. |
| [`poligonos.html`](poligonos.html) e [`src/poligonos/`](src/poligonos/) | Modelos 3D, projeção, renderização e interação com gestos. |
| `src/hand-*.ts` | Captura da webcam, rastreamento e filtragem dos movimentos da mão. |
| [`public/vision/`](public/vision/) | Modelo e arquivos do MediaPipe usados no navegador. |
| [`tests/`](tests/) | Testes do rastreamento, dos cortes e da manipulação de sólidos. |
| [`scripts/jogar.mjs`](scripts/jogar.mjs) e [`Jogar.cmd`](Jogar.cmd) | Servidor local da versão compilada e atalho para Windows. |

## 📌 Créditos

O rastreamento de mãos utiliza o MediaPipe Tasks Vision e o modelo Hand Landmarker do Google. Consulte [CREDITOS.txt](CREDITOS.txt) e [LICENSE-MediaPipe.txt](LICENSE-MediaPipe.txt).

A atividade Polígonos 3D foi inspirada na demonstração *Editing 3D shape vertices and rotation* do projeto [Shape Creator](https://github.com/collidingScopes/shape-creator-tutorial).
