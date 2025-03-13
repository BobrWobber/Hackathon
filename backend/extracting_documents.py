from pymongo import MongoClient
from bson import ObjectId
import io
import re
import fitz
from settings import settings

CHUNK_SIZE = 50

class extract_document:
    def __init__(self):
        self.client = MongoClient("mongodb+srv://bobber:Hack123!@wobberbobrmongodb.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000")
        self.db = self.client["WobberBobberHackathon"]
        self.collection = self.db["documents"]

    def clean_text(self, text):
        return re.sub(r'[^\x20-\x7E]', '', text) 


    def extract_text_from_pdf(self, pdf_data: bytes):

        pdf_document = fitz.open(stream=pdf_data, filetype="pdf")

        text = ""


        for page_num in range(pdf_document.page_count):
            page = pdf_document.load_page(page_num)
            text += page.get_text()

        return text


    def split_into_chunks(self, text: str, chunk_size: int):

        chunks = [text[i:i + settings.text_splitter_chunk_size] for i in range(0, len(text), settings.text_splitter_chunk_size)]
        return chunks


    def get_all_pdfs_chunks(self):

        pdfs = self.collection.find({"content_type": "application/pdf"})

        all_chunks = []

        for pdf in pdfs:
            pdf_data = pdf["data"]
            pdf_text = self.extract_text_from_pdf(pdf_data)


            cleaned_text = self.clean_text(pdf_text)


            pdf_chunks = self.split_into_chunks(cleaned_text, settings.text_splitter_chunk_size)
            all_chunks.extend(pdf_chunks)
        return all_chunks
    
document = extract_document()


    # texts = [
    #     "This is the first document.",
    #     "This is the second document.",
    #     "Another test sentence.",
    #     "Artificial intelligence is revolutionizing the tech industry.",
    #     "Machine learning models require large datasets for training.",
    #     "Climate change is a critical global issue that needs urgent attention.",
    #     "The stock market is influenced by numerous economic factors.",
    #     "The quick brown fox jumps over the lazy dog.",
    #     "Python is a versatile programming language used for web development and data analysis.",
    #     "The Eiffel Tower is one of the most iconic landmarks in the world. and it is located in spain in madrid",
    #     "Quantum computing could dramatically change the future of technology.",
    #     "Renewable energy sources like solar and wind are becoming more popular.",
    #     "The history of ancient civilizations is fascinating and complex.",
    #     "Data science involves extracting insights from large datasets.",
    #     "Sports events like the Olympics unite people from all around the world.",
    #     "Artificial neural networks mimic the human brain's structure and function.",
    #     "The internet has connected people globally, transforming communication.",
    #     "Financial markets are constantly fluctuating due to various factors.",
    #     "Space exploration continues to push the boundaries of human knowledge.",
    #     "Nutrition plays a crucial role in maintaining a healthy lifestyle."
    # ]   