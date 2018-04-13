import sqlite3
import sys
import json

# UNCOMMENT BELOW TO LOAD NEW JSON DATA INTO DATABASE
# artist_file = json.load(open('../5M.json'))
# artist_file = list(map(lambda artist: (None, artist), artist_file))

class DataBaseConnection(object):
    # Create new connection to listen to queries
    def __init__(self, db):
        self.con = sqlite3.connect(db)

        with self.con:
            self.cur = self.con.cursor()

            # UNCOMMENT BELOW TO LOAD NEW JSON DATA INTO DATABASE

            # self.cur.execute("DROP TABLE IF EXISTS Artists")
            # self.cur.execute('''
                # CREATE TABLE Artists(
                    # ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    # Name TEXT NOT NULL
                # )
            # ''')

            # self.cur.executemany("INSERT INTO Artists VALUES(?, ?)", artist_file)

            # print("Done")

    # Execute query and return cursor object with query results
    def query(self, arg, args):
        self.cur.execute(arg, args)
        self.con.commit()
        return self.cur

    # Close connection when done
    def __del__(self):
        self.con.close()

class DataBaseManager(object):
    def __init__(self):
        self.database_path = 'artists.db'

    def search_artists(self, search_query):
        # We search without case sensitivity
        search_query = search_query.lower()

        db_con = DataBaseConnection(self.database_path)

        # fetch all Name that contain our search term
        contains = db_con.query(
                "SELECT DISTINCT Name FROM Artists WHERE lower(Name) LIKE ?",
                ('%' + search_query + '%',)
        ).fetchall()

        # Convert results from tuples into strings
        contains = list(map(lambda artist_tuple: artist_tuple[0], contains))

        # Return data as json
        return json.dumps({
            'contains' : contains
        })

# UNCOMMENT BELOW TO LOAD NEW JSON DATA INTO DATABASE
# db = DataBaseManager()
# db.search_artists("init")
