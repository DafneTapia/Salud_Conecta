from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class UserData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.String(10), nullable=False)
    favorite_character = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(20), nullable=False)
    time = db.Column(db.String(10), nullable=False)
    doctor = db.Column(db.String(100), nullable=False)

@app.route('/')
def index():
    data = UserData.query.all()
    return render_template('index.html', data=data)

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    age = request.form.get('age')
    favorite_character = request.form.get('favorite_character')
    date = request.form.get('date')
    time = request.form.get('time')
    doctor = request.form.get('doctor')
    
    new_data = UserData(name=name, age=age, favorite_character=favorite_character, date=date, time=time, doctor=doctor)
    db.session.add(new_data)
    db.session.commit()
    
    return jsonify({
        'name': name,
        'age': age,
        'favorite_character': favorite_character,
        'date': date,
        'time': time,
        'doctor': doctor
    })

if __name__ == '__main__':
    db.create_all()  # Crea la base de datos y las tablas si no existen
    app.run(debug=True)
