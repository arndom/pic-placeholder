export default function handler(req, res) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  res.status(200).send(ok);
}
