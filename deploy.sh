#!/bin/bash

echo "🚀 Seniority Calculator Deployment Script"
echo "=========================================="

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Deployment Options:"
    echo "1. Netlify (Recommended)"
    echo "2. Vercel"
    echo "3. GitHub Pages"
    echo "4. Local server preview"
    echo "5. Firebase Hosting"
    echo "6. Surge.sh"
    echo ""
    
    read -p "Choose deployment option (1-6): " choice
    
    case $choice in
        1)
            echo "📤 Deploying to Netlify..."
            if command -v netlify &> /dev/null; then
                netlify deploy --prod --dir=dist
            else
                echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            fi
            ;;
        2)
            echo "📤 Deploying to Vercel..."
            if command -v vercel &> /dev/null; then
                vercel --prod
            else
                echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
            fi
            ;;
        3)
            echo "📤 Deploying to GitHub Pages..."
            echo "⚠️  Make sure you have a GitHub repository set up"
            echo "Run: git add . && git commit -m 'Deploy to GitHub Pages' && git push"
            ;;
        4)
            echo "🌐 Starting local preview server..."
            npx serve dist -p 3000
            ;;
        5)
            echo "📤 Deploying to Firebase Hosting..."
            if command -v firebase &> /dev/null; then
                firebase deploy --only hosting
            else
                echo "❌ Firebase CLI not found. Install with: npm install -g firebase-tools"
            fi
            ;;
        6)
            echo "📤 Deploying to Surge.sh..."
            if command -v surge &> /dev/null; then
                surge dist
            else
                echo "❌ Surge CLI not found. Install with: npm install -g surge"
            fi
            ;;
        *)
            echo "❌ Invalid option"
            ;;
    esac
else
    echo "❌ Build failed!"
    exit 1
fi
