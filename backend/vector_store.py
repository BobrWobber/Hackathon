import torch
import faiss
import numpy as np
from transformers import AutoTokenizer, AutoModel

# Step 1: Load the Hugging Face Model and Tokenizer

class VectorStore:
    def __init__(self):
        self.model_name = "distilbert-base-uncased"
        self.model = AutoModel.from_pretrained(self.model_name)
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
    
    # Step 2: Define the function to get embeddings for text
    def get_embedding(self, text):
        inputs = self.tokenizer(text, return_tensors="pt", padding=True, truncation=True)
        with torch.no_grad():
            outputs = self.model(**inputs)
        # Use the mean of the token embeddings as the sentence embedding
        embedding = outputs.last_hidden_state.mean(dim=1)
        return embedding.squeeze().numpy()  # Convert to numpy array

    # Step 3: Define the function to create a FAISS index (Make this static)
    @staticmethod
    def create_faiss_index(embeddings):
        embeddings_np = np.array(embeddings)
        dimension = embeddings_np.shape[1]  # The dimension of the embedding
        index = faiss.IndexFlatL2(dimension)
        index.add(embeddings_np)
        return index

    # Step 4: Define the function to search the FAISS index
    def search_faiss(self, query, index, k):
        query_embedding = self.get_embedding(query).reshape(1, -1)
        distances, indices = index.search(query_embedding, k)  # distances: similarity scores, indices: document indices
        return indices, distances


# Step 5: Sample text documents
texts = [
    "This is the first document.",
    "This is the second document.",
    "Another test sentence.",
    "Artificial intelligence is revolutionizing the tech industry.",
    "Machine learning models require large datasets for training.",
    "Climate change is a critical global issue that needs urgent attention.",
    "The stock market is influenced by numerous economic factors.",
    "The quick brown fox jumps over the lazy dog.",
    "Python is a versatile programming language used for web development and data analysis.",
    "The Eiffel Tower is one of the most iconic landmarks in the world.",
    "Quantum computing could dramatically change the future of technology.",
    "Renewable energy sources like solar and wind are becoming more popular.",
    "The history of ancient civilizations is fascinating and complex.",
    "Data science involves extracting insights from large datasets.",
    "Sports events like the Olympics unite people from all around the world.",
    "Artificial neural networks mimic the human brain's structure and function.",
    "The internet has connected people globally, transforming communication.",
    "Financial markets are constantly fluctuating due to various factors.",
    "Space exploration continues to push the boundaries of human knowledge.",
    "Nutrition plays a crucial role in maintaining a healthy lifestyle."
]



# Step 6: Generate embeddings for the text documents

vector_store = VectorStore()
embeddings = [vector_store.get_embedding(text) for text in texts]

# Step 7: Create the FAISS index
index = VectorStore.create_faiss_index(embeddings)

# Step 8: Query example
query = "eiffel tower"
indices, distances = vector_store.search_faiss(query, index, 3)

# Step 9: Output the retrieved document indices and their corresponding distances
print(f"Query: {query}")
print("Indices of retrieved documents:", indices)
print("Distances (similarity scores):", distances)

# Print the corresponding texts of the retrieved documents
for idx in indices[0]:
    print(f"Retrieved text: {texts[idx]}")
