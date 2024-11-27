# Stream Zappy

Stream Zappy is a modern, scalable web application built with Next.js and Tailwind CSS. It includes middleware, utility helpers, and a modular structure to ensure maintainability and efficiency.

## Features
- **Next.js Integration**: Built with a powerful React framework for server-side rendering and static generation.
- **Tailwind CSS**: Fully customized styling using the Tailwind framework.
- **Dynamic Routing**: Simplified and flexible routing using Next.js.
- **Custom Middleware**: Enhances request/response handling.
- **Utility Functions**: Reusable runtime helpers for optimized development.
- **Component-Based Architecture**: Clean and modular component structure for scalability.

## Project Structure
```
createxyz-project/
├── public/                # Static assets
├── src/
│   ├── api/               # API routes
│   ├── app/               # App pages and layout
│   ├── components/        # Reusable components
│   ├── utilities/         # Helper functions
│   └── middleware.js      # Custom middleware
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## Prerequisites
- Node.js v14 or higher
- npm or yarn

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rahul-kumbhar0/stream_zappy.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stream_zappy
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
### Development
Run the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Build for Production
To build the project for production:
```bash
npm run build
```

### Static Export
This project uses static export. The output will be generated in the `out` directory:
```bash
npm run build
```

## Configuration
Modify the following files to customize the application:
- `next.config.js` for build and runtime configurations.
- `tailwind.config.js` for styling.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

---
