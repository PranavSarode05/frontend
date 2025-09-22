# Smart Find & Replace - Contentstack Marketplace App

This repository contains the frontend implementation of an AI-powered content replacement tool for Contentstack. The app enables content editors to perform intelligent text replacements with brand compliance validation and natural language command processing.

## Features

**Standard Mode**: Traditional find and replace with AI enhancement
- Interactive find and replace interface with real-time suggestions
- AI-powered replacement suggestions with confidence scoring (15-95%)
- Brand compliance validation using exported brandkit guidelines
- Deep content search across all entry fields including nested objects and arrays
- Named entity recognition for people, companies, and email addresses
- One-click AI suggestions with contextual awareness

**Smart Prompt Mode**: Natural language command interface
- Process complex replacement commands using natural language
- Multi-operation processing in single prompt execution
- Batch operation preview with individual confidence scores
- Field updates combined with text replacements in one command
- Example: `Replace "John Smith" with "Jane Doe" and title to "Manager"`
- Brand compliance validation across all operations

**AI Integration**: Advanced language model processing
- Google Gemini 2.0 Flash for intelligent content suggestions
- Contextual understanding of replacement requirements
- Confidence scoring algorithm for replacement quality assessment
- Brand guideline validation with detailed compliance reporting

## Workflow

**Initial Load**:
- The app initializes using Contentstack App SDK
- Detects entry context automatically across multiple app locations
- Loads with dual-mode interface (Standard and Smart Prompt modes)

**Standard Mode Operation**:
- User enters text to find in the search field
- Optional: Click "AI Suggestion" for intelligent replacement recommendations
- System displays confidence score and brand compliance status
- User clicks "Replace" to apply changes across all entry fields

**Smart Prompt Mode Operation**:
- User switches to Smart Prompt Mode interface
- Enters natural language commands describing desired replacements
- System parses command into individual operations with AI assistance
- Operations are previewed with confidence scores and brand validation
- User executes all operations simultaneously with single click

**Content Processing**:
- Deep content replacement across entry fields, arrays, and nested objects
- Named entity recognition for intelligent context-aware replacements  
- Email, URL, and company name pattern matching
- Automatic entry publishing after successful updates

## How It Works

**SDK Integration**: The app uses Contentstack App SDK for seamless integration
- Multi-location support (CustomField, SidebarWidget, RTE, ContentTypeField)
- Automatic entry context detection and data retrieval
- Secure API communication with proper authentication

**AI Processing**: 
- Natural language prompt parsing using regex patterns and AI enhancement
- Contextual replacement suggestions based on entry content
- Confidence scoring algorithm considering multiple factors
- Brand compliance validation against exported brandkit JSON

**Content Updates**:
- Deep object traversal for comprehensive content replacement
- Field update mapping with flexible field name matching
- Atomic operations ensuring data consistency
- Automatic publishing to maintain content freshness

## Technologies Used

- **Frontend**: Vanilla JavaScript, HTML5, CSS3 with modern responsive design
- **SDK**: Contentstack App SDK for marketplace integration
- **AI**: Google Gemini 2.0 Flash for intelligent content processing
- **Backend**: Node.js with Express for API handling and content management
- **Styling**: Custom CSS with light theme optimized for Contentstack UI
- **APIs**: Contentstack Management API for entry updates and publishing

## Installation

Clone this repository:
git clone https://github.com/your-username/smart-find-replace-frontend.git

text

Navigate to the project directory:
cd smart-find-replace-frontend

text

Configure the API endpoint in marketplace-app.html:
const API_URL = 'https://your-backend-url.vercel.app';

text

Deploy to Contentstack Launch or your preferred hosting platform.

Set up the backend API with required environment variables:
- Contentstack API credentials
- Google Gemini API key
- Brandkit JSON file for compliance validation

## Usage Examples

**Standard Mode**:
Find: "John Smith"
AI Suggestion: "Sarah Johnson" (87% confidence)
Replace: Updates all instances across entry

text

**Smart Prompt Mode**:
Replace "Beta Corp" with "TechCorp Solutions" and contact to "info@techcorp.com"
→ Creates two operations:

Text replacement: "Beta Corp" → "TechCorp Solutions"

Field update: contact → "info@techcorp.com"

text

**Complex Multi-Field Updates**:
Replace "Alpha Company Inc" with "Beta Technologies Corp" and email to "@betatech.com"
→ Updates company references and email domains simultaneously

text

## Project Structure

├── marketplace-app.html # Main application with dual-mode interface
├── assets/
│ └── styles.css # Light theme styling with responsive design
├── manifest.json # Contentstack marketplace app configuration
└── README.md # This documentation

text

## Testing

The app includes comprehensive test scenarios for both modes:

**Standard Mode Testing**:
- Simple text replacements with confidence validation
- Named entity recognition for people and companies
- Email and URL replacement patterns
- Brand compliance edge cases

**Smart Prompt Testing**:
- Natural language command parsing
- Multi-operation execution
- Field mapping and updates
- Complex replacement scenarios

## Related Repositories

- [Backend API](https://github.com/your-username/smart-find-replace-backend) - Node.js API with AI processing and Contentstack integration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Create an issue in this repository
- Check browser console for debugging information
- Review Contentstack App SDK documentation