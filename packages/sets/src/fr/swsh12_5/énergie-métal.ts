import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Métal extends EnergyCard {

  public provides: CardType[] = [CardType.METAL];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Métal';

  public fullName: string = 'Énergie Métal swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/159/high.jpg';

  public text: string = '';

}
