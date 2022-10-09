"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Productos
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

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
    usuario= User(email=email, password=contraseña, address=direccion, phone=telefono, city=ciudad, country=pais, is_active=True)
    db.session.add(usuario)
    db.session.commit()
    return jsonify({"message":"Hola mundo"}), 200

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    contraseña = request.json.get("contraseña", None)
    # Consulta la base de datos por el nombre de usuario y la contraseña
    user = User.filter.query(email=email, password=contraseña).first()
    if user is None:
          # el usuario no se encontró en la base de datos
        return jsonify({"msg": "Bad username or password"}), 401
    
    # crea un nuevo token con el id de usuario dentro
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route('/crearProducto', methods=['POST'])
def new_product():
    categoria = request.json.get("categoria", None)
    tipoAnimal = request.json.get("tipoAnimal", None)
    name = request.json.get("name", None)
    precio = request.json.get("precio", None)
    descripcion = request.json.get("descripcion", None)
    productos= Productos(categoria=categoria, tipoAnimal=tipoAnimal, name=nombre, price=precio, description=descripcion, is_active=True)
    db.session.add(usuario)
    db.session.commit()
    return jsonify({"message":"Hola mundo"}), 200

@api.route('/mostrarProducto', methods=['Get'])
def view_product():
    productos = Productos.query.all()
    data = []
    for product in productos:
        data.append(product.serialize())
    return jsonify(data), 200