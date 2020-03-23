from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/disneyprincess'
app.config['SECRET_KEY'] = "mysecret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Princesses(db.Model):
    __tablename__ = 'princesses'
    princessID = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(22))
    chinesename = db.Column(db.String(5))
    status = db.Column(db.String(10))
    species = db.Column(db.String(7))
    animation = db.Column(db.String(38))
    img_url = db.Column(db.String(87))
    # description = db.Column(db.Text)