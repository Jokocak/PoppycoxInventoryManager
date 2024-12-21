# Poppycox Inventory Project

This project aims to be an inventory manager for the Poppycox food truck.  This software tracks the current amount of inventory and adjusts it as new sales data comes in.  This software aims to complete the following:

## Functionality List
- [ ] Authentication Page
  - The authentication page which takes an email and password to sign in to associated account.
- [ ] Inventory Page
  - Presents the current amount of inventory and adjusts it as new sales data is posted to Clover.
- [ ] Sales Page
  - Presents the amount of inventory sold at each event.
- [ ] Inventory Prediction Page
  - Presents predictions for required inventory for future events based on quantitative analysis, and in the future through a machine learning model.

## Getting Started

### Prerequisites
- Python 3.8+
- Node.js & npm
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/Jokocak/PoppycoxInventoryManager.git
cd PoppycoxInventoryManager

# Backend setup
python -m venv venv
source venv/bin/activate  # venv\Scripts\activate on Windows
pip install -r requirements.txt
python backend/app.py

# Frontend setup
cd frontend
npm install
npm start
