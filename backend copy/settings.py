
"""Configure the module from environment variables."""
import typing
import os
from pymongo import MongoClient

from pydantic import SecretStr


class Base:
    # """Settings for this module"""

    # ROOT_PATH: str = ""
    # LOG_LEVEL: typing.Literal[
    #     "CRITICAL",
    #     "FATAL",
    #     "ERROR",
    #     "WARN",
    #     "WARNING",
    #     "INFO",
    #     "DEBUG",
    #     "NOTSET",
    # ] = "INFO"
    # JSON_LOGS: bool = False

    # IS_OCR: bool = False

    # class Config:
    #     """Config to control pydantic settings behaviour"""

    #     env_file = ".env"
    #     env_file_encoding = "utf-8"


    # OPENAI_BASE_URL: str = "https://modana-openai-0.openai.azure.com/openai/"
    OPENAI_APIKEY: SecretStr = SecretStr("1dzs4tFFGdmfwgeHmrjSO5XsXbEiqQszMGqwxfRsrQbLIv9BnYK3JQQJ99BCACfhMk5XJ3w3AAABACOGDsqo")
    OPENAI_API_VERSION: str = "2023-07-01-preview"
    OPENAI_API_TYPE: str = "azure"
    AZURE_OPENAI_DEPLOYMENT_NAME: str = "gpt-4o"
    AZURE_OPENAI_DEPLOYMENT_EMBEDDINGS_NAME: str = "ada-embeddings"
    AZURE_ENDPOINT: str = "https://wobberbobropenai.openai.azure.com/"

    client = MongoClient("mongodb+srv://bobber:Hack123!@wobberbobrmongodb.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000")
    db = client.WobberBobberHackathon
    # chat_history = db.documents
    vector_store = db.vector_store
    document_store = db.documents

    memory_window_buffer: int = 8
    text_splitter_chunk_size: int = 100
    text_splitter_chunk_overlap: int = 20


    # MONGODB_URI: str = os.getenv('MONGODB_URI')


    memory_window_buffer: int = 8
    text_splitter_chunk_size: int = 500
    text_splitter_chunk_overlap: int = 20


settings = Base()