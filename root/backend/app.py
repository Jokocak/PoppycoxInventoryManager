# Imports
from flask import Flask

# Configuration name pass
app = Flask(__name__)

# Run app only if this file is being called
if __name__ == "__main__":
    app.run(debug=True)