from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(Base):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(80), unique=False, nullable=False)
    teléfono = db.Column(db.String(80), unique=False, nullable=False)
    dirección = db.Column(db.String(80), unique=False, nullable=False)
    país = db.Column(db.String(80), unique=False, nullable=False)
    ciudad = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class Productos(Base):
    __tablename__ = 'productos'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    precio = db.Column(db.String(80), unique=False, nullable=False)
    descripción = db.Column(db.String(120), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class Pedido(Base):
    __tablename__ = 'pedido'
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = Column(Integer, ForeignKey('usuario.id'))
    fecha = db.Column(db.String(120), unique=True, nullable=False)
    precio_total = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

class DetallePedido(Base):
    __tablename__ = 'detalle_pedido'
    id = db.Column(db.Integer, primary_key=True)
    pedido_id = Column(Integer, ForeignKey('pedido.id'))
    cantidad = db.Column(db.String(120), unique=True, nullable=False)
    precio = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }