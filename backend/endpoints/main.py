from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from pymongo import MongoClient
import io

app = FastAPI()

CHUNK_SIZE = 50

# MongoDB connection
client = MongoClient("mongodb+srv://bobber:Hack123!@wobberbobrmongodb.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000")
db = client["WobberBobberHackathon"]
collection = db["documents"]  # Collection to store files




@app.get("/get_conversation_messages/")

async def get_conversation_messages():

        messages_array = []
        message_collection = db["messages"]
        messages = message_collection.find()
        
        for message in messages:
            user: str = message["user"]
            text: str = message["bot"]
            messages_array.append({"user": user, "bot": text})
        
        message_collection.delete_many({})
        return {"messages": messages_array}
        

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)