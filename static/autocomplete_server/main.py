from flask import Flask
from flask_cors import CORS, cross_origin
import sqlite3

import time

import database

app = Flask(__name__)

@app.route("/get_artists/<search_query>")
@cross_origin(origins=["http://localhost:8080/*"])
def get_artists(search_query):

    manager = database.DataBaseManager()

    start = time.time()
    result = manager.search_artists(search_query)
    end = time.time()

    print(end - start)

    return result

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
