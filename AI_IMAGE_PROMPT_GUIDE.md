# Acosta Labs: AI Image Generation Prompt Guide

This guide outlines the standard structure for creating image generation prompts for Nano Banana (or any other AI image generator) to ensure brand consistency across the Acosta Labs website and blog.

## Core Brand Aesthetic
All images generated for Acosta Labs should adhere to the following core aesthetic:
- **Style:** Corporate tech, high-trust enterprise B2B, sophisticated, professional.
- **Color Palette:** Dark mode aesthetic with deep slate backgrounds, using refined indigo, neon blue, and purple accents.
- **Quality:** Photorealistic, cinematic lighting, clean lines, 8k resolution, elegant typography (if text is included).
- **Vibe:** Secure, authoritative, modern, and minimalist. Avoid overly chaotic, childish, or overly "cyberpunk/hacker" themes (unless specifically requested for a creative piece).

## Prompt Structure
Every prompt should be structured with the following components:

### 1. The Context Prefix
Always start the prompt by providing the AI with the context of where the image will live.
> **Context:** This image is for the tech blog of Acosta Labs, a professional full-stack software engineering and AI consultancy.

### 2. The Accuracy Tag
Directly after the context, specify whether the AI needs to be literal with the provided data or if it should focus on an abstract concept.
- **[PRECISE DATA IMAGE]**: Use this when the image *must* include specific text, numbers, or a very specific UI layout (e.g., a chart showing 8.2s vs 1.4s load times).
- **[CREATIVE IMAGE]**: Use this when the image is conceptual, abstract, or metaphorical (e.g., a glowing database structure).

### 3. The Subject & Composition
Describe the actual contents of the image clearly. If it's a UI, describe the layout. If it's an abstract concept, describe the metaphor. 
*Example:* "A sleek, modern dashboard UI showing a dramatic 'before and after' bar chart..."

### 4. Required Text (If Applicable)
If the AI needs to generate text, quote it exactly and instruct the AI to render it clearly.
*Example:* "Include a sleek callout pill showing exactly the text: 'Checkout Abandonment: 78% -> 23%'."

### 5. Brand Style Modifiers
End the prompt with the core brand aesthetic keywords to enforce the visual style.
*Example:* "The design language should be minimalist, trustworthy enterprise software, dark theme, high contrast, elegant typography, 8k resolution."

---

## Example Prompts

**Example 1: A Precise Data Image (UI/Chart)**
> **Context:** This image is for the tech blog of Acosta Labs, a professional full-stack software engineering and AI consultancy. **[PRECISE DATA IMAGE]** Generate a highly polished, professional analytics dashboard UI showing a clear "before and after" bar chart comparing server response times. On the left, a subtle red bar exactly labeled "Legacy System: 8.2s LCP". On the right, a vibrant green bar exactly labeled "Next.js Architecture: 1.4s LCP". Include a sleek callout pill exactly showing "Checkout Abandonment: 78% -> 23%". The design language should be minimalist, trustworthy enterprise software, dark theme, high contrast, elegant typography, 8k resolution.

**Example 2: A Creative Conceptual Image**
> **Context:** This image is for the tech blog of Acosta Labs, a professional full-stack software engineering and AI consultancy. **[CREATIVE IMAGE]** Generate a sophisticated, professional 3D visualization of a modern enterprise database structure. At the center, a sleek search bar icon is processing user queries, connected to structured data nodes. The concept is secure, trustworthy AI integration for e-commerce. Clean corporate tech aesthetic, dark mode background with subtle blue and slate accents, elegant, photorealistic, 8k resolution.
