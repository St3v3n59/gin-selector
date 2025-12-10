export default function handler(req, res) {
  const { preferences } = req.body;

  let cocktail = "Gin Fleurs Sacrées de Babylone";

  if (preferences.includes('fort')) cocktail = "Gin Cascade du Temple";
  if (preferences.includes('botanique')) cocktail = "Gin Oasis Botanique";

  res.status(200).json({ cocktail });
}