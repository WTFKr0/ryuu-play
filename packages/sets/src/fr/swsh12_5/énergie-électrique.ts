import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Électrique extends EnergyCard {

  public provides: CardType[] = [CardType.LIGHTNING];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Électrique';

  public fullName: string = 'Énergie Électrique swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/155/high.jpg';

  public text: string = '';

}
