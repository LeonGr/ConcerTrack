from flask import Flask
from flask_cors import CORS, cross_origin
import sqlite3

import database

app = Flask(__name__)

@app.route("/get_artists/<search_query>")
@cross_origin(origins=["http://localhost:8080/*", "http://concertrack.com/*", "http://167.99.46.123/*", "http://localhost:80/*"])
def get_artists(search_query):

    # Create new connection to database
    manager = database.DataBaseManager()

    # Retrieve results from database
    result = manager.search_artists(search_query)

    return result

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
