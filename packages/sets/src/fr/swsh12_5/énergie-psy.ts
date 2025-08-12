import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Psy extends EnergyCard {

  public provides: CardType[] = [CardType.PSYCHIC];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Psy';

  public fullName: string = 'Énergie Psy swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/156/high.jpg';

  public text: string = '';

}
