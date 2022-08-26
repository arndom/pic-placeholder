import { getAllPlaceholders } from "../../../lib/redis";
import getRandomInt from "../../../utils/getRandomInt";

export default async function handler(req, res) {
  const data = await getAllPlaceholders();
  const randomNum = getRandomInt(0, 538);

  const dataItem = data.at(randomNum).toJSON();

  const file = dataItem.file;
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  
  res.redirect(`https://picc.vercel.app/api/images/${file}`)
}
