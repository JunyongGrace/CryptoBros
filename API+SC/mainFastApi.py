from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dbConnection import get_database_connection  # Import the database module

app = FastAPI()

# Configure CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/Nft/")
def get_Nft():
    try:
        # Establish a database connection using the imported function
        connection = get_database_connection()

        if connection is None:
            return {"error": "Failed to connect to the database."}

        cursor = connection.cursor()
        query = "SELECT * FROM Nft"
        cursor.execute(query)
        result = cursor.fetchall()
        Nft = [dict(zip(cursor.column_names, row)) for row in result]
        cursor.close()
        connection.close()

        return Nft

    except mysql.connector.Error as err:
        return {"error": f"Error: {err}"}
