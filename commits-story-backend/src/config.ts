import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
	return {
		github: {
			token: process.env.GITHUB_TOKEN,
      user: process.env.GITHUB_USER,
		},
	};
});