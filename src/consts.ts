export const SITE_TITLE = 'Advanced AI';
export const SITE_DESCRIPTION = 'AI News, Tools & Insights for Business Leaders';
export const SITE_URL = 'https://advancedai.com';

export const CATEGORIES = [
	'Tools & Products',
	'Industry News',
	'Robotics & Hardware',
	'AI in Education',
	'How People Use AI',
	'OpenClaw & Open Source',
] as const;

export type Category = (typeof CATEGORIES)[number];
