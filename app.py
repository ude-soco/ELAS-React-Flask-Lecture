from flask import Flask

app = Flask(__name__)

@app.route("/login")
def login():
    return "Login has been successful"