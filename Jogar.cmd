@echo off
setlocal
if not exist "%~dp0scripts\jogar.mjs" goto extrair
if not exist "%~dp0scripts\policy.mjs" goto extrair

where node >nul 2>nul
if errorlevel 1 (
  echo Instale o Node.js para abrir o jogo.
  pause
  exit /b 1
)
node "%~dp0scripts\jogar.mjs" --open
if errorlevel 1 (
  pause
  exit /b 1
)
exit /b 0

:extrair
echo A pasta da Mostra esta incompleta.
echo Clique com o botao direito no ZIP e escolha "Extrair Tudo".
echo Abra Jogar.cmd na pasta extraida, junto das pastas scripts e dist.
pause
exit /b 1
