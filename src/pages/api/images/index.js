import { getAllPlaceholders } from "../../../lib/redis";

export default async function handler(req, res) {
  let data = await getAllPlaceholders();

  data = data.map((image) => {
    const images = image.toJSON()
    const {entityId, ...temp} = images;

    return {
      ...temp,
      image: `https://picc.vercel.app/api/images/${temp.file}`
    }
  })
  res.status(200).json({ data })
}
