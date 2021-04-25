from flask import Flask

app = Flask(__name__)

@app.route("/login", methods=['GET', 'POST'])
def login():
    return "Login has been successful"