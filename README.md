# Mapeia Viagem

**Mapeia Viagem** é uma aplicação web interativa que permite aos usuários gerar guias turísticos personalizados para qualquer cidade ou país. Utilizando a API do Google Gemini, o aplicativo fornece informações detalhadas sobre pontos turísticos, custos, e outras informações relevantes de maneira fácil e acessível.

## Tecnologias Utilizadas

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **API**: Google Gemini
- **Bibliotecas**:
  - `Flask`: Framework web para Python.
  - `Flask-CORS`: Permite o compartilhamento de recursos entre origens diferentes.
  - `google.generativeai`: Biblioteca para integrar com a API do Google Gemini.

## Funcionalidades

- **Criação de Guias Turísticos**: Gera guias turísticos detalhados para qualquer cidade ou país.
- **Interface Responsiva**: A aplicação se adapta a diferentes tamanhos de tela.
- **Integração com API**: Utiliza a API do Google Gemini para gerar conteúdos dinâmicos e personalizados.

## Como Usar

### Requisitos

- Python 3.x
- Um navegador moderno
- Chave de API do Google Gemini

### Instalação

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/mapeia-viagem.git
    ```
2. Acesse o diretório do projeto:
    ```bash
    cd mapeia-viagem
    ```
3. Crie um ambiente virtual e ative-o:
    ```bash
    python3 -m venv venv
    source venv/bin/activate  # Linux/Mac
    venv\Scripts\activate  # Windows
    ```
4. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```
5. Insira sua chave de API do Google Gemini no arquivo `app.py`:
    ```python
    gemini.configure(api_key="Insira aqui sua chave API")
    ```

### Executando a Aplicação

1. Inicie o servidor Flask:
    ```bash
    python app.py
    ```
2. Acesse a aplicação no navegador:
    ```
    http://localhost:5000
    ```

### Estrutura do Projeto

```bash
mapeia-viagem/
│
├── app.py              # Backend em Flask
├── templates/
│   └── index.html      # Frontend HTML
├── static/
│   ├── css/
│   │   └── style.css   # Estilos CSS
│   └── js/
│       └── script.js   # Lógica JavaScript
├── img/
│   ├── logomapeia.png  # Logotipo do projeto
│   └── fundo.gif       # Imagem de fundo
└── README.md           # Este arquivo

```
## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, novas funcionalidades ou correções, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*. Vamos adorar colaborar para tornar este projeto ainda melhor.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para mais detalhes.

## Desenvolvedores

- **Isabella Cairac Bagdal**
- **Maria Eduarda Machado**
