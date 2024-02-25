import Rainbow from "rainbowvis.js";

// export const kategorijeColors = {
//   sljiva: "#637db0",
//   jabuka: "#dbd632",
//   grozdje: "#bd8f40",
//   ostalo: "#7a7469",
// };

const rainbowsColors = {
  sljiva: ["#082d75", "#becdeb"],
  jabuka: ["#81c752", "#e0e336"],
  grozdje: ["#9e7d10", "#edcf6b"],
  ostalo: ["#a1a1a1", "#545454"],
};

// export const COLORS = ["#637db0", "#e6dd35", "#e8c44d", "#756e6e"]; // promeniti u object
export const COLORS = ["#637db0", "#e6dd35", "#e8c44d", "#756e6e"]; // promeniti u object

export function colorMapper(artikliKategorije) {
  let kategorije = [];
  artikliKategorije.forEach((i) => kategorije.push(i.kategorija));
  kategorije = [...new Set(kategorije)];
  let result = {};

  kategorije.forEach((kat) => {
    let rainbow = new Rainbow();
    if (kat in rainbowsColors) {
      rainbow.setSpectrum(rainbowsColors[kat][0], rainbowsColors[kat][1]);
    } else {
      rainbow.setSpectrum(
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        `#${Math.floor(Math.random() * 16777215).toString(16)}`
      );
    }
    let rainbowArtikliKategorije = artikliKategorije.filter(
      (ak) => ak.kategorija === kat
    );
    rainbow.setNumberRange(0, Math.max(2, rainbowArtikliKategorije.length));
    rainbowArtikliKategorije.forEach((ak, index) => {
      let artikal = ak.artikal;
      let color = rainbow.colourAt(index - 1);
      result[artikal] = `#${color}`;
    });
  });
  return result;
}
