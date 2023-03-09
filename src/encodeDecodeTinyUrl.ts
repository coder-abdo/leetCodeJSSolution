type Code = (longUrl: string) => string;

const hashMap = {};
const encode: Code = (longUrl) => {
  const uniqueUrl = Date.now().toString(36);
  hashMap[uniqueUrl] = longUrl;
  return `http://tinyurl.com/${uniqueUrl}`;
};
const decode: Code = (shortUl) => {
  return hashMap[shortUl.split("/com")[1]];
};

export { encode, decode };
