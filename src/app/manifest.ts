import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Acosta Labs',
        short_name: 'Acosta Labs',
        description: 'Full-Stack Software Engineer specializing in React, Java, AI, and e-commerce.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d1117',
        theme_color: '#0d1117',
        icons: [
            {
                src: '/logo-icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
