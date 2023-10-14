# database.py

import mysql.connector

# Define your database configuration
db_config = {
    "host": "ictstu-db1.cc.swin.edu.au",
    "user": "s103807301",
    "port": "3306",
    "password": "Zxcvbnm@1234",
    "database": "s103807301_db"
}

# Function to establish a database connection
def get_database_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None
