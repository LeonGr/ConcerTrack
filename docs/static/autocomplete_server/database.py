import sqlite3
import sys
import json

# artist_file = json.load(open('../5M.json'))

# artist_file = list(map(lambda artist: (None, artist), artist_file))

class DataBaseConnection(object):
    def __init__(self, db):
        self.con = sqlite3.connect('artists.db')

        with self.con:
            self.cur = self.con.cursor()

            # self.cur.execute("DROP TABLE IF EXISTS Artists")
            # self.cur.execute('''
                # CREATE TABLE Artists(
                    # ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
                    # Name TEXT NOT NULL
                # )
            # ''')

            # self.cur.executemany("INSERT INTO Artists VALUES(?, ?)", artist_file)

    def query(self, arg, args):
        self.cur.execute(arg, args)
        self.con.commit()
        return self.cur

    def __del__(self):
        self.con.close()

class DataBaseManager(object):
    def __init__(self):
        self.database_path = 'artists.db'

    def search_artists(self, search_query):
        search_query = search_query.lower()

        db_con = DataBaseConnection(self.database_path)

        contains = db_con.query(
                "SELECT DISTINCT Name FROM Artists WHERE lower(Name) LIKE ?",
                ('%' + search_query + '%',)
        ).fetchall()

        contains = list(map(lambda artist_tuple: artist_tuple[0], contains))

        return json.dumps({
            'contains' : contains
        })
