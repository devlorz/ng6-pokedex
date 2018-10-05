export interface PokemonDetail {
  name: string;
  sprite: string;
  id: number;
  types: Array<string>;
  description: string;
  backgroundColor: any | null;
  titleColor: string | null;
  typesColor: { [key: string]: string } | null;
}
