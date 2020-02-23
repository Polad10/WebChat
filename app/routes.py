from app import app, socketio
from flask import render_template
import time

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on("message")
def test(message):
    print(message)
    time.sleep(5)
    socketio.send("Yes, you are!")