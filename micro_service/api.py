from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/taxes', methods=['POST'])
def calculate_taxes():
    data = request.get_json()
    product = data['product']
    amount = data['amount']

    # Calcul des taxes
    tps = amount * 0.05
    tvq = amount * 0.09975
    total_with_taxes = amount + tps + tvq

    return jsonify({'totalWithTaxes': total_with_taxes})

if __name__ == '__main__':
    app.run(port=5000)
