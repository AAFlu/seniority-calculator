#!/bin/bash

echo "🚀 GitHub Pages Deployment Script"
echo "================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/seniority-calculator.git"
    exit 1
fi

# Build the project
echo "📦 Building project for GitHub Pages..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if docs directory exists
    if [ ! -d "docs" ]; then
        echo "❌ Build directory 'docs' not found. Check vite.config.js configuration."
        exit 1
    fi
    
    # Add all files
    echo "📝 Adding files to git..."
    git add .
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy to GitHub Pages - $(date)"
    
    # Push to GitHub
    echo "📤 Pushing to GitHub..."
    git push origin main
    
    echo ""
    echo "🎉 Deployment completed!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Go to Settings > Pages"
    echo "3. Set Source to 'Deploy from a branch'"
    echo "4. Select 'main' branch and '/docs' folder"
    echo "5. Click Save"
    echo ""
    echo "🌐 Your app will be available at:"
    echo "   https://YOUR_USERNAME.github.io/seniority-calculator/"
    echo ""
    echo "⏱️  It may take a few minutes for the changes to appear."
    
else
    echo "❌ Build failed!"
    exit 1
fi
