export const USE_NATIVE_IMAGE = true;

export const getSiteUrl = () => {
    return process.env.DEPLOY_PRIME_URL || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
};