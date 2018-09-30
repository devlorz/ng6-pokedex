export interface PokemonDetail {
  name: string;
  sprite: string;
  id: number;
  types: Array<string>;
  description: string;
  backgroundColor?: any;
  titleColor?: string;
  typesColor?: {[key: string]: string};
}
