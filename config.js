const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61VaY+qWBD9L/cr9mPfTDoZQFBUFEQUezKZIFz2TVbxxf8+oX093Zl5S08y324u1KlTp07V/QryIqrhCg5g+hWUVdQ5DRyPzVBCMAVi6/uwAhPgOY0DpuC0igddigrPe5nReN5kyrE07ZXtQIMx5lcYcbPKkrHIwJJncJ+Asj2nkfsTQHPvuLLd6wgreFzuxaGIXtgVqZ3UE6LpLBJtSn7FnEvXFp7BfUR0oirKA7kMYQYrJ13BQXei6nP0TREKx62KKEiEO3q+J5JZli9tNllFa1Ssb1YZawpZL66Z+jn6pLFk+bob9DVWdxFayTFmasryxhzzJlcRn+QRrNvXxfFWP+jXUZBDT/Vg3kTN8GndobTKRdtsspmKerszJYlp4NWVuVrBC0syVekXu0S7FPkR+xzxPM5OXG/SuOmit542BW4htoi+PvKHm86SSrw4rY+0hym99ZG4Xr15Jfkvum9nxyEUVcJNTifWht3yQK60w1a7oq7R6elAzHdSeVsGyJz6HH1jhi8XoUiLzGwDd6dVv0DYNQ2Vy25Y6A55JQv/zHaKbMTFO32naaufsVz3FkZcA0o763uZDHFTHTCDD2OLTEVJEbPjStECiV1KRG/jXOrTxlpFZ4vmaJfE7oBiFy7qG0sitAON3vDtDndbWRSeXytK4KB6YIrfJ6CCQVQ3ldNERf56h0+A43UmdCvYvKoL1mjgXjp0CfskVQ6Erl6XnVecDe+yMWcn5XS16JW5487LjnoGE1BWhQvrGnqLqG6KatBgXTsBrMH099dGjTVXMCsauIw8MAUETbE4g+EMT5K/1V/60Glqpyy/5LABE+BXRaZBMG2qFk7Aa4Ags8JMwBieJWlRUmhqJkiiJPM4iVMYR3Jjhdkj6T7KYN04WQmmOEsyDItzFHGf/D88cEIUZQ6TKImTGRknCIwXWYojcAajxBkv/YIHef9jAnJ4bR42HsUn8Qnwo6purLwt08Lx3jz+9tFx3aLNG3PIXWk8wApMsfdr2DRRHtRjZW3uVG4YdVAa6wBT30lreJ8AD3aRC0c8wPz5pClVvTGWrdAdeTqIixMdjB0Mi/zxC+Sh6xMs83TmGeqJIlj3iTsT8Ik8sx7nOh7FswwY5XhskDHmh4ZGUGGrXTRM4qoDrmpXRTQsaxbHmFa8mvLhRFhB703ls+MmbbkvEpj/BDeQI+4CEQ1LLHWdRIlpX32MPSlSSX3AfTgcTL++b22p8Ea8I4/b9JFZg7FbY55/uWGK/9MP9781HwM82DhRWoMpkDRzib2osqwRclz187kgB4IUCOC9R2+j/5itBVNf99TLPhfnC7rzM66O+W2cXDfo2vQEUtvaxdykDT/u6+fvgIwutKRZc0XS7RbrLUig6Ebc2FLpCatjglND/HLd4dkFF6pdJ2+2Vahv91v9HEtMmKFn+8h45ME4eFA8Izuzo9JSaDld7J/HbA+vfEzW7skXpArFdGMjSLkWQ71FpHLhJ/udju7EPJwbDRLk3ou9UDvVSrpTGOx7oz/5KpyX68UFDmvlhWgXgkGmXUahXoe+Jntbium3xyj6ti8ezvIj+Lrbc2fs0C9689Hj2H3yAeLbY/EDH4k7pNIsZG7R/S5EziTdrVV0X9Da3h+w3NjcZikjJq21oLg1uI/DW6ZO4xdVBqbAyb2qiDwwAalTN8L7mH5n8kn6/heaK2Kf6ggAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "mr green",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

