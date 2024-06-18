## Installation

1. **Clone the repository:**
   git clone https://github.com/Ananda-Das/level-2-Assignment-2

2. **Install dependencies:**
   cd product-management-api <br>
   npm install

3. **Set up environment variables:**
   Create a .env file in the root directory and define the following variables:
   PORT=5000 <br>
   MONGODB_URI=`<Your MongoDB connection URI>`

## Usage

### Product Endpoints

- **Create a New Product:** POST /api/products

- **Retrieve a List of All Products:** GET /api/products

- **Retrieve a Specific Product by ID:** GET /api/products/:productId

- **Update Product Information:** PUT /api/products/:productId

- **Delete a Product:** DELETE /api/products/:productId

- **Search a Product by Name, Category, or Description:** GET /api/products?searchTerm=<searchTerm>

### Order Endpoints

- **Create a New Order:** POST /api/orders

- **Retrieve All Orders:** GET /api/orders

- **Retrieve Orders by User Email:** GET /api/orders?email=<userEmail>

## Live API URL

You can access the live API at https://assignment-2-dun-nine.vercel.app/
