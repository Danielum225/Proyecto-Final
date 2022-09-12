"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/registro', methods=['POST'])
def register():
    email = request.json.get("email", None)
    contraseña = request.json.get("contraseña", None)
    direccion = request.json.get("direccion", None)
    telefono = request.json.get("telefono", None)
    ciudad = request.json.get("ciudad", None)
    pais = request.json.get("pais", None)
    usuario= User(email=email, password=contraseña, direction=direccion, phone=telefono, city=ciudad, country=pais, is_active=True)
    db.session.add(usuario)
    db.session.commit()
    return jsonify({"message":"Hola mundo"}), 200