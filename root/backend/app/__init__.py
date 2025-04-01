from flask import Flask
from dotenv import load_dotenv
import os
from flask_cors import CORS

def create_app():
    load_dotenv()  # Loads .env variables into environment
    app = Flask(__name__)
    CORS(app)

    # Import routes
    from .routes.order import order_bp
    app.register_blueprint(order_bp, url_prefix="/order")

    return app
