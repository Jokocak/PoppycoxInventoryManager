# Use Python base image (slim for smaller image size)
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy all backend files
COPY . .

# Expose port 8000
EXPOSE 8000

# Run your Flask app
CMD ["python", "app.py"]
