from flask import Flask, render_template, redirect, request, session, Blueprint , jsonify,send_from_directory
from flask_cors import CORS
import mysql.connector
import os

app = Flask(__name__)


app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)
# IMAGE_DIRECTORY = ".\\ticket exchanger(ktxp)\SERVER\static\photos"
# IMAGE_DIRECTORY = "ticket exchanger(ktxp)\\src\\assets\\photos"
IMAGE_DIRECTORY = os.path.join(os.getcwd(), "ticket exchanger(ktxp)", "SERVER", "static", "photos")
IMAGE_DIRECTORY = os.path.abspath(r"C:\Users\ashvi\OneDrive\Documents\ktxp\ticket exchanger(ktxp)\SERVER\static\photos")



@app.route('/images/<filename>')
def get_image(filename):
    # Send the requested image file
    return send_from_directory(IMAGE_DIRECTORY, filename)

@app.route('/images')
def list_images():
    # Return a list of all image filenames in the directory
    images = os.listdir(IMAGE_DIRECTORY)
    return jsonify(images)


@app.route('/login'  , methods = ["GET", "POST"])
def index():
    data = request.json
    email = data.get("username")
    password = data.get("password")
    print(email)
    print(password)

    if email and password != "":
        return('' ,200)
    else:
        return ('' , 400)
    
@app.route('/getphotos'  , methods = ["GET", "POST"])
def photos():
    
    
    return ('' , 400)


if __name__ == "__main__":

    app.run(debug = True, host = "0.0.0.0" , port = 8080)
    