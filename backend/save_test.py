
import streamlit as st
# import open_ai_chain as chatbot
from mistralai import Mistral
from vector_store import vector_store
from extracting_documents import document



# Set page title
st.set_page_config(page_title="Simple Chatbot", page_icon="🤖")

# Title of the chatbot
st.title("🤖 Simple Streamlit Chatbot")

# Initialize session state for storing conversation history
if "messages" not in st.session_state:
    st.session_state.messages = []  # List of tuples: (user_msg, bot_msg)

# Function to generate bot responses (you can replace this with an actual model)
def get_bot_response(user_message):
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
        "The Eiffel Tower is one of the most iconic landmarks in the world. and it is located in spain in madrid",
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

    text_chunks = document.get_all_pdfs_chunks()
    print(text_chunks[0])
    print(text_chunks)

    embeddings = [vector_store.get_embedding(text) for text in text_chunks]

    # Step 7: Create the FAISS index
    index = vector_store.create_faiss_index(embeddings)

    # Step 8: Query example
    query = user_message
    indices, distances = vector_store.search_faiss(query, index, 3)

    pre_prompt_context = ""  # Initialize pre_prompt_context here
    for idx in indices[0]:
        pre_prompt_context += text_chunks[idx] + " " # Append the actual text, not the index
        print(f"Retrieved text: {text_chunks[idx]}")

    context = indices[0]
    pre_prompt_context = "use this context to generate a response if it makes sense to the user input and prioritize it: " + pre_prompt_context
    full_context = pre_prompt_context + "user_input:" + user_message
    print(full_context)

    api_key = "EwW0nR41XrYLtfJKkNqjCPTd5IAVPwZV"
    model = "mistral-small-latest"
    client = Mistral(api_key=api_key)
    chat_response = client.chat.complete(
        model=model,
        messages=[
            {
                "role": "user",
                "content":  full_context,
            },
        ]
    )
    return (chat_response.choices[0].message.content)


# Chat input box
with st.form(key="chat_form", clear_on_submit=True):
    user_input = st.text_input("You:", "")
    submit_button = st.form_submit_button(label="Send")

# Handle user input
if submit_button and user_input:
    # Generate bot response
    bot_response = get_bot_response(user_input)
    # Append to conversation history
    st.session_state.messages.append((user_input, bot_response))

# Display conversation history
st.subheader("Conversation:")
for user_msg, bot_msg in st.session_state.messages:
    st.markdown(f"**You:** {user_msg}")
    st.markdown(f"**Bot:** {bot_msg}")


# api_key = "EwW0nR41XrYLtfJKkNqjCPTd5IAVPwZV"
# model = "mistral-small-latest"
# client = Mistral(api_key=api_key)

# embeddings_batch_response = client.embeddings.create(
#     model=model,
#     inputs=["Embed this sentence.", "As well as this one."],
# )
# print(embeddings_batch_response)
# # response = chatbot.qa(combined_prompt)
# chat_response = client.chat.complete(
#     model= model,
#     messages = [
#         {
#             "role": "user",
#             "content": "What is the best French cheese?",
#         },
#     ]
# )