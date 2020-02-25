from app import app, socketio
from flask import render_template, request
from flask_socketio import rooms, join_room

@app.route("/")
def index():
    return render_template("index.html")

@socketio.on("clientSend")
def receive(data):
    socketio.emit('serverSend', data['message'], room=data['room'], include_self=False)

@socketio.on("join")
def connect(room):
    join_room(room)