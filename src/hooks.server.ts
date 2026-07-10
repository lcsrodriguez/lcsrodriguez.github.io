import { redirect } from '@sveltejs/kit';


// Hard redirect
/** @type {import('@sveltejs/kit').Handle} */
/*
export async function handle({ event, resolve })
{
    const targetUrl: string = 'https://lucasrodriguez.net/?s=o'; // Target redirect

    // Optional: skip redirect for specific paths (like your target, assets, API, etc.)
    if (
        event.url.pathname === targetUrl ||
        event.url.pathname.startsWith('/api') ||
        event.url.pathname.startsWith('/_app') || // built assets
        event.url.pathname === '/favicon.ico'
    )
    {
        return resolve(event);
    }

    // Redirect everything else
    throw redirect(303, targetUrl);
}*/