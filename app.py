from flask import Flask, jsonify, request
from flask_cors import CORS
import google.generativeai as gemini

app = Flask(__name__)

CORS(app)

gemini.configure(api_key="Insira aqui sua chave API")

model = gemini.GenerativeModel('gemini-1.5-flash')

@app.route('/receita', methods=['POST'])
def make_receita():
    try:
        dados = request.json
        ingredientes = dados.get('ingredientes')
        prompt = f"""
        Crie um guia turístico para o seguinte destino: {ingredientes}.
        Apresente o guia no formato html com codificação UTF-8, com o título em h1, subtítulos em h2, um ícone como esse 📌🗺 acompanhada do endereço do local como o nome da rua por exemplo, um ícone 💸acompanhado do custo médio do local dentro de cada ponto turístico, um pequeno texto com a descrição do local.
        Exiba uma mensagem contendo "Este lugar não existe" se a localização não existir no mundo real ou for fictícia como Wakanda por exemplo. 
        Faça uma borda em volta de cada pontos turísticos apenas em volta das informações.
        Não escrever a palavra html no resultado.
        Não exibir nunca observações sobre o prompt no resultado.
        Não invente pontos turísticos que não existem.
        Quando for um objeto ou alimento exiba uma mensagem contendo "Insira um destino!"
        Quando não for identificado um destino exiba a mensagem "Insira um destino!"
        Não exibir um prompt quando não for uma cidade ou país exiba "Insira um país ou cidade!".
        """

        resposta = model.generate_content(prompt)
        print(resposta)

        # Extrai a receita do texto da resposta
        receita = resposta.text.strip().split('\n')

        return (receita), 200

    except Exception as e:
        return jsonify({"Erro": str(e)}), 300

if __name__ == '__main__':
    app.run(debug=True)

