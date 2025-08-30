# 🚀 Seniority Calculator

A modern web application to calculate software developer seniority based on skill assessments across different technology stacks.

## Features

- **Stack Selection**: Choose from Frontend, Mobile, Backend, or DevOps
- **Skill Assessment**: Rate your proficiency in various skills (1-5 levels)
- **Real-time Ranking**: Get instant seniority calculations as you select skill levels
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Comprehensive Skills**: Detailed skill sets for each development stack

## Seniority Levels

1. **Trainee** - Learning fundamentals
2. **Junior** - Basic implementation
3. **SSR** - Semi-Senior, independent work
4. **Senior** - Advanced, mentoring others
5. **Expert** - Architecture and leadership

## Technology Stacks

### Frontend
- HTML/CSS, JavaScript, TypeScript
- React, Angular, Vue.js
- State Management, Build Tools
- Testing, Performance

### Mobile
- React Native, Flutter
- iOS Development, Android Development
- Mobile UI/UX, App Store Deployment
- Mobile Testing, Performance Optimization

### Backend
- Java, Spring Framework, Spring Boot
- Database Design, API Design
- Microservices, Security
- Testing, Performance, DevOps Integration

### DevOps
- Linux Administration, Docker, Kubernetes
- CI/CD, Cloud Platforms
- Infrastructure as Code, Monitoring
- Security, Networking, Database Administration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd senioritycalc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

## How to Use

1. **Select Your Stack**: Choose your primary development area (Frontend, Mobile, Backend, or DevOps)

2. **Rate Your Skills**: For each skill in your selected stack, choose your seniority level:
   - Level 1: Trainee - Learning fundamentals
   - Level 2: Junior - Basic implementation
   - Level 3: SSR - Semi-Senior, independent work
   - Level 4: Senior - Advanced, mentoring others
   - Level 5: Expert - Architecture and leadership

3. **View Your Ranking**: The system calculates your overall seniority score and displays:
   - Numerical score (0-100)
   - Seniority level
   - Description of your level
   - Your strongest skills

## Ranking Algorithm

The ranking is calculated using a weighted average approach:
- Each skill level (1-5) contributes to the total score
- The average is normalized to a 0-100 scale
- Ranking ranges determine your overall seniority level

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you have any questions or suggestions, please open an issue on GitHub.
