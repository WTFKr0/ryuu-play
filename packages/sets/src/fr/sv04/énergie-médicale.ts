import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Médicale extends EnergyCard {

  public provides: CardType[] = [CardType.COLORLESS];

  public energyType = EnergyType.SPECIAL;

  public set: string = 'sv04';

  public name: string = 'Énergie Médicale';

  public fullName: string = 'Énergie Médicale sv04';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv04/182/high.jpg';

  public text: string = 'Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie {C}. Lorsque vous attachez cette carte de votre main à l\'un de vos Pokémon, soignez 30 dégâts de ce Pokémon-là.';

}
