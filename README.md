# Darwin42 Robots Blog

![App Preview](https://imgix.cosmicjs.com/e0eaaa30-58e0-11f1-876b-2597f2099e23-generated-1779785829438.jpg?w=1200&h=630&fit=crop&auto=format,compress)

A warm, modern blog about Darwin42 robots built with Next.js 16 and Cosmic CMS.

## Features
- 📝 Blog posts with rich content
- 🤖 Robot showcase pages with galleries
- 👤 Author profiles
- 🎨 Warm modern design
- 📱 Fully responsive

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a155fd7f2c683f5f2b32f6d&clone_repository=6a1560d2f2c683f5f2b32fa1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: a blog about darwin42 robots with warm modern design"

### Code Generation Prompt

> a blog about darwin42 robots with warm modern design

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account and bucket

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Get all posts with related data
const { objects } = await cosmic.objects
  .find({ type: 'posts' })
  .depth(1)
```

## Cosmic CMS Integration
This app integrates with three content types: authors, robots, and posts. Posts are linked to authors and featured robots via object metafields.

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify

<!-- README_END -->