/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://hacidmind:hacidmind123@cluster0.k4pdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
}
