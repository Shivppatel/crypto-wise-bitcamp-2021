import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    {
      id: 'coinbase',
      name: 'Coinbase',
      type: 'oauth',
      version: '2.0',
      scope: 'wallet:accounts:read,wallet:user:email ' // Make sure to request the users email address
    }
  ]
};

export default (req, res) => NextAuth(req, res, options);
