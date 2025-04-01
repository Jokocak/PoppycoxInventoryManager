# Poppycox Inventory Project

This project is an inventory management solution for the Poppycox food truck. The software tracks current inventory levels and dynamically updates inventory based on incoming sales data. It provides predictive insights to optimize inventory for future events.

## Functionality
- [ ] **Authentication Page**
  - Users can securely log in using email and password.

- [ ] **Inventory Page**
  - Displays current inventory levels and automatically updates based on sales data retrieved from Clover.

- [ ] **Sales Page**
  - Provides detailed views of inventory sold at each event.

- [ ] **Inventory Prediction Page**
  - Predicts optimal inventory quantities for upcoming events using quantitative analysis, with future integration of machine learning algorithms.

## Getting Started

### Prerequisites
Ensure the following software is installed on your system:

- [Docker](https://www.docker.com/products/docker-desktop/) (with Docker Compose)
- [Git](https://git-scm.com/downloads)

*Note: Docker installation includes Docker Compose.*

### Setup
Follow these instructions to set up and run the project:

```bash
# Clone the repository
git clone https://github.com/Jokocak/PoppycoxInventoryManager.git
cd PoppycoxInventoryManager

# Run Docker Compose (development)
docker compose up --build

# Alternatively, run Docker Compose in detached mode
docker compose up --build -d
```

Your application will then be available at:
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:8000](http://localhost:8000)

### Project Structure
```
root
├── backend
├── frontend
└── data-analysis
```

### Next Steps
- [ ] Implement authentication and database connection
- [ ] Integrate Clover sales data
- [ ] Develop predictive analytics module

