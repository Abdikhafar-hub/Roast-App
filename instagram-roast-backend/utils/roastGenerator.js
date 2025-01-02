// utils/roastGenerator.js
const generateRoast = (userData) => {
    const { username, followers_count, media_count } = userData;
  
    const roasts = [
      `@${username}, with ${followers_count} followers and ${media_count} posts, even your cat is more popular than you.`,
      `Hey @${username}, ${media_count} posts? Are you auditioning for the Guinness World Record?`,
      `@${username}, ${followers_count} followers? I think the bots stopped following you.`,
      `@${username}, those ${media_count} posts make me wonder—do you have any friends offline?`,
    ];
  
    return roasts[Math.floor(Math.random() * roasts.length)];
  };
  
  module.exports = { generateRoast };
  