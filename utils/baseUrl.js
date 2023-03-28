const baseUrl = process.env.NODE_ENV === "production" 
? 'https://www.mir.chat' 
: 'http://localhost:3000';

export default baseUrl;