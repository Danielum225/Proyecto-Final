"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Productos, Categoria, TipoAnimal
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import json
import os
import stripe

api = Blueprint('api', __name__)

stripe.api_key = "sk_test_51LyYrIDwE9VfIXGQC55jyQLaaMulaBEocmlD5bFIoIfRQ5ZdbcaVoOiSftccCL5MmKQOccM1IgZ4X0IlPnipejsc00m6RWgYKR"


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

def create_token(user):
    token = create_access_token(identity=user.id)

    return{
        "token":token,
        "email":user.email,
        "id":user.id,
    }

@api.route("/token", methods=["POST"])
def login():
    try:
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        # Consulta la base de datos por el nombre de usuario y la contraseña
        user = User.query.filter_by(email=email, password=password).first()
        if user is None:
            # el usuario no se encontró en la base de datos
            return jsonify({"msg": "Bad username or password"}), 401
        
        # crea un nuevo token con el id de usuario dentro
        access_token = create_access_token(identity=user.id)
        data_response = create_token(user)
        return jsonify(data_response), 200
    except Exception as e:
        print(e)

@api.route('/crearProducto', methods=['POST'])
def new_product():
    categoria = request.json.get("categoria", None)
    tipoAnimal = request.json.get("tipoAnimal", None)
    name = request.json.get("name", None)
    precio = request.json.get("precio", None)
    descripcion = request.json.get("descripcion", None)
    productos= Productos(categoria=categoria, tipoAnimal=tipoAnimal, name=nombre, image=imagen, price=precio, description=descripcion, is_active=True)
    db.session.add(usuario)
    db.session.commit()
    return jsonify({"message":"Hola mundo"}), 200

@api.route('/mostrarProducto', methods=['GET'])
def view_product():
    productos = Productos.query.all()
    data = []
    for product in productos:
        data.append(product.serialize())
    return jsonify(data), 200

def calculate_order_amount(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    return 1400

@api.route('/create-payment-intent', methods=['POST'])
def create_payment():
    try:
        data = json.loads(request.data)
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount(data['items']),
            currency='usd'
        )

        return jsonify({
          'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403

@api.route('/mostrarCategoria', methods=['GET'])
def view_category():
    categoria = Categoria.query.all()
    data = []
    for category in categoria:
        data.append(category.serialize())
    return jsonify(data), 200

def calculate_order_amount(items):
    
    return 1400

@api.route('/mostrarAnimal', methods=['GET'])
def view_animal():
    tipoAnimal = TipoAnimal.query.all()
    data = []
    for animal in tipoAnimal:
        data.append(animal.serialize())
    return jsonify(data), 200

def calculate_order_amount(items):
    
    return 1400