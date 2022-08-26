
import { searchPlaceholdersByTypes } from "../../../lib/redis";
import { supportedTypes } from "../../../utils/supportedTypes";

export default async function handler(req, res) {
  const { type } = req.query

  if (supportedTypes.includes(type)) {
    let data = await searchPlaceholdersByTypes(type);

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

  if (!supportedTypes.includes(type)) {
    res.status(404).send('404 - Not Found');
  }
}
