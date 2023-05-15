from flask import Flask, request, jsonify
from PIL import Image
from flask_cors import CORS
import io
import base64
import os

app = Flask(__name__)
CORS(app)  # CORS設定を追加

FLASK_API_KEY = os.getenv("FLASK_API_KEY")
# print(FLASK_API_KEY)
@app.route('/api/process_image', methods=['POST'])
def process_image():
    api_key = request.headers.get('api_key')
    # print(api_key)
    if api_key != FLASK_API_KEY:
        return jsonify({"message": "Unauthorized"}), 401
    file = request.files['file']
    img_bytes = file.read()
    img = Image.open(io.BytesIO(img_bytes))

    # ここで画像処理を行う

    buffered = io.BytesIO()
    img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

    return jsonify({'image': img_str, "message": "成功！"})