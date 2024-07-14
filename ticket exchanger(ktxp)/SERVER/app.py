from flask import Flask, render_template, redirect, request, session, Blueprint , jsonify,send_from_directory
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)


app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)


@app.route('/login'  , methods = ["GET", "POST"])
def index():
    data = request.json
    email = data.get("username")
    password = data.get("password")

    if email and password != None:
        return('' ,200)
    else:
        return ('' , 400)


if __name__ == "__main__":

    app.run(debug = True, host = "0.0.0.0" , port = 8080)
    