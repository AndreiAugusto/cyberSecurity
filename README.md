# Cyber Security Guide

A comprehensive Angular web application providing educational resources and guidance on digital security and online safety.

## Features

### Educational Pages
- **Home**: Introduction to the cyber security guide
- **WhatsApp Scams**: Learn to identify and avoid WhatsApp scams
- **Malicious Links**: Understand how to spot and avoid phishing links
- **Strong Passwords**: Best practices for creating and managing passwords
- **Backup & Privacy**: Data protection and privacy guidelines

### AI Assistant
- Interactive chatbot powered by OpenAI GPT-3.5
- Ask questions about cyber security topics
- Get personalized security advice

## Technology Stack

- **Frontend**: Angular 19+ with standalone components
- **Routing**: Angular Router with lazy loading
- **API**: Vercel Serverless Functions
- **AI**: OpenAI GPT-3.5 Turbo
- **Styling**: CSS with responsive design
- **Accessibility**: WCAG 2.1 compliant features

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AndreiAugusto/cyberSecurity.git
cd cyberSecurity
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## API Configuration

The chatbot requires an OpenAI API key to function. When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add `OPENAI_API_KEY` with your OpenAI API key
4. Redeploy the application

### Local Development with API

For local development with the chatbot:

1. Create a `.env` file in the root directory
2. Add your OpenAI API key:
```
OPENAI_API_KEY=your-api-key-here
```

Note: You'll need to set up a local proxy or use Vercel CLI for local API testing.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variable:
```bash
vercel env add OPENAI_API_KEY
```

The application is configured with `vercel.json` for automatic deployment.

## Accessibility Features

This application follows WCAG 2.1 Level AA guidelines:

- Semantic HTML elements (`header`, `nav`, `main`, `article`, `section`)
- ARIA labels and roles for screen readers
- Keyboard navigation support
- Focus indicators for all interactive elements
- Skip to main content link
- Sufficient color contrast ratios
- Responsive design for various screen sizes
- Support for reduced motion preferences
- Alt text for images (where applicable)

## Project Structure

```
cyberSecurity/
├── src/
│   ├── app/
│   │   ├── pages/              # Page components
│   │   │   ├── home/
│   │   │   ├── whatsapp-scams/
│   │   │   ├── malicious-links/
│   │   │   ├── strong-passwords/
│   │   │   └── backup-privacy/
│   │   ├── chatbot/            # Chatbot component
│   │   ├── services/           # Angular services
│   │   │   └── chat.ts         # Chat service for API calls
│   │   ├── app.routes.ts       # Routing configuration
│   │   └── app.config.ts       # App configuration
│   ├── styles.css              # Global styles
│   └── index.html              # Main HTML file
├── api/
│   └── chat.js                 # Vercel serverless function
├── vercel.json                 # Vercel deployment config
└── package.json                # Dependencies

```

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Lint the code

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Security

This application provides educational content about cyber security. For the chatbot to work, you need to:

1. Obtain an API key from OpenAI
2. Configure it as an environment variable
3. Keep your API key secure and never commit it to version control

## Support

For questions or issues, please open an issue on GitHub.
