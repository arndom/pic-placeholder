import { searchPlaceholdersByTypes } from "../../../lib/redis";
import { supportedTypes } from "../../../utils/supportedTypes";

export default async function handler(req, res) {
  const { category } = req.query;

  if (supportedTypes.includes(category)) {
    const data = await searchPlaceholdersByTypes(category);

    const randomNum = Math.floor(Math.random() * data.length);
    const dataItem = data.at(randomNum).toJSON();

    const file = dataItem.file;
    res.redirect(`https://picc.vercel.app/api/images/${file}`)
  }

  if (!supportedTypes.includes(category)) {
    res.status(404).send('404 - Not Found');
  }
}
