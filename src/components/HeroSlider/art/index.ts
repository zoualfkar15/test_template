import CloudsArt from "./CloudsArt";
import HorizonArt from "./HorizonArt";
import OrbitArt from "./OrbitArt";
import FieldArt from "./FieldArt";

export const artworks = {
  clouds: CloudsArt,
  horizon: HorizonArt,
  orbit: OrbitArt,
  field: FieldArt,
};

export type ArtName = keyof typeof artworks;
