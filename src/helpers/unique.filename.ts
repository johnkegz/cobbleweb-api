export const uniqueFileName = (req, file, callback) => {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  const originalFileNameWithoutSpaces = file.originalname.replace(/ /g, '_');
  const randomFileName = `${uniqueSuffix}.${originalFileNameWithoutSpaces}`;
  callback(null, randomFileName);
};
