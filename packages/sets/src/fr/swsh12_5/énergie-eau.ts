import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Eau extends EnergyCard {

  public provides: CardType[] = [CardType.WATER];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Eau';

  public fullName: string = 'Énergie Eau swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/154/high.jpg';

  public text: string = '';

}
