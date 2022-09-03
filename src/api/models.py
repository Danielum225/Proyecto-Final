from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(80), unique=False, nullable=False)
    direction = db.Column(db.String(80), unique=False, nullable=False)
    country = db.Column(db.String(80), unique=False, nullable=False)
    city = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class Productos(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class Pedido(db.Model):
    __tablename__ = 'order'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    date = db.Column(db.String(120), unique=False, nullable=False)
    total_price = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class DetallePedido(db.Model):
    __tablename__ = 'order_detail'
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'))
    amount = db.Column(db.String(120), unique=False, nullable=False)
    price = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }