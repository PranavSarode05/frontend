# Smart Find & Replace - Contentstack Marketplace App

This repository contains the frontend implementation of an AI-powered content replacement tool for Contentstack. The app enables content editors to perform intelligent text replacements with brand compliance validation and natural language command processing.

## Features

**Standard Mode**: Traditional find and replace with AI enhancement
- Interactive find and replace interface with real-time suggestions
- AI-powered replacement suggestions with confidence scoring (15-95%)
- Deep content search across all entry fields including nested objects and arrays
- One-click AI suggestions with contextual awareness

**Smart Prompt Mode**: Natural language command interface
- Process complex replacement commands using natural language
- Multi-operation processing in single prompt execution
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
- Atomic operations ensuring data consistency
- Automatic publishing to maintain content freshness

## Technologies Used

- **Frontend**: JavaScript, HTML5, CSS3 with modern responsive design
- **SDK**: Contentstack App SDK for marketplace integration
- **AI**: Google Gemini 2.0 Flash for intelligent content processing
- **Backend**: Node.js with Express for API handling and content management
- **Styling**: Custom CSS for Contentstack UI
- **APIs**: Contentstack Management API for entry updates and publishing

## Installation

Clone this repository:
```bash
git clone https://github.com/PranavSarode05/frontend.git
```

Navigate to the project directory:
```bash
cd frontend
```

Configure the API endpoint in marketplace-app.html:
```bash
const API_URL = 'https://backend-f4ee.vercel.app';
```

Deploy to Contentstack Launch or your preferred hosting platform.

Set up the backend API with required environment variables:
- Contentstack API credentials
- Google Gemini API key
- Brandkit JSON file for compliance validation

## Related Repositories

- [Backend API](https://github.com/PranavSarode05/backend--) - Node.js API with AI processing and Contentstack integration
