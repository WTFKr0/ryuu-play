import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

export class Énergie_Obscurité extends EnergyCard {

  public provides: CardType[] = [CardType.DARK];

  public energyType = EnergyType.BASIC;

  public set: string = 'swsh12.5';

  public name: string = 'Énergie Obscurité';

  public fullName: string = 'Énergie Obscurité swsh12.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/swsh/swsh12.5/158/high.jpg';

  public text: string = '';

}
