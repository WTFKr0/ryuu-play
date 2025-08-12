import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Feu extends EnergyCard {

  public provides: CardType[] = [CardType.FIRE];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Feu';

  public fullName: string = 'Énergie Feu swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/153/high.jpg';

  public text: string = '';

}
