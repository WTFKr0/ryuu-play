import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Combat extends EnergyCard {

  public provides: CardType[] = [CardType.FIGHTING];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Combat';

  public fullName: string = 'Énergie Combat swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/157/high.jpg';

  public text: string = '';

}
