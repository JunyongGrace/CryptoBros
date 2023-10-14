# database.py

import mysql.connector

# Define your database configuration
db_config = {
    "host": "localhost",
    "user": "root",
    "port": "3307",
    "password": "",
    "database": "cryptoBro"
}

# Function to establish a database connection
def get_database_connection():
    try:
        connection = mysql.connector.connect(**db_config)
        return connection
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None
