// In-memory store for rate limiting. 
// Note: This works perfectly for a single-container Docker deployment like AcostaLabs.
// If the app is ever scaled across multiple servers, this would need to move to Redis.

interface RateLimitRecord {
    count: number;
    resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Strict Settings: Max 3 messages per IP per hour.
const WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 3;

export function checkRateLimit(ip: string): { success: boolean } {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    // 1. IP not seen before -> Allow and start tracking
    if (!record) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
        return { success: true };
    }

    // 2. The time window has expired -> Reset tracking for this IP
    if (now > record.resetTime) {
        record.count = 1;
        record.resetTime = now + WINDOW_MS;
        return { success: true };
    }

    // 3. User is within the time window but has hit the limit -> Block
    if (record.count >= MAX_REQUESTS) {
        return { success: false };
    }

    // 4. User is within the window and limit -> Increment and Allow
    record.count++;
    return { success: true };
}
