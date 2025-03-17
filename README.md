# Interface para trabalhar com arquivos de um projeto


## Resumo

Interface semelhante à do Google NotebookLM, com uma lista de arquivos (somente pdf, por enquanto) do lado esquerdo, uma previsualização do pdf no meio, e um painel à direita com Notas, podem adicionar ou excluir notas (pequenas anotações de texto).
O objetivo é trabalhar somente com arquivos de um projeto, dividindo em uma estrutura de gerenciamento de projetos. Também posso adicionar um recurso de passar o pdf para um LLM, para fazer resumos.


## Descrição das rotas e arquivos acessórios

> * root.tsx: original do Remix;  
> * components/PdfPreview.tsx: componente que trata da visualização do pdf, usando recursos nativos do browser;  
> * components/PdfList.tsx: cria uma lista de arquivos pdf constantes em uma determinada pasta;  
> * components/NoteEditor.tsx: permite a edição das notas. Por enquanto as notas não estão sendo salvas em lugar nenhum;  
> * utils/fileUtil.ts: utilitário usado pelo PdfList para fazer uma lista de arquivos pdf;    
> * utils/noteUtil.ts: ainda está vazio;  
  
> routes/  
>   * index.tsx: gráfico de Gantt, última versão (sem WebApiAdaptor, salvando só pelo botão);  
>   * pdf-notes-manager.tsx: interface principal, que chama os módulos PdfList, PdfPreview e NoteEditor;  
>   * api.pdf-files.ts: endpoint de API que lê o diretório indicado para criar a lista de arquivos pdf;  
>   * teste.tsx: é o resultado da conversão do arquivo html criado pelo tldraw.com (fiz um esboço no tldraw, criei um arquivo html único, joguei no Blackbox para criar um arquivo tsx único, e depois joguei no WebUI para decompor nos arquivos necessários)  



## O que pode ser aproveitado:

Ainda está em andamento.  
Pode ser feito um outro painel com as seções da documentação de gerenciamento do projeto.  
As notas ainda precisam ser salvas em algum lugar.  
Precisa adicionar um botão para selecionar o diretório.  
Precisa de um lugar para salvar o nome do projeto (que está somente em uma caixa de texto).  
Pode ser adicionado embeddings dos arquivos pdf e um frame para conversar com um LLM baseado nos arquivos do projeto.

## O que deve ser melhorado: 

O expandir/contrair os painéis, como tem no Google notebookLM;  
Encapsular tudo isso num template, para criar múltiplos projetos, cada um com seus arquivos, notas e visualizações