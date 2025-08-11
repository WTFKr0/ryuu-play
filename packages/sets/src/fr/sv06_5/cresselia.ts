import {
  //AttackEffect,
  CardType,
  //CheckHpEffect,
  //ChooseCardsPrompt,
  //DealDamageEffect,
  Effect,
  //GameLog,
  //GameMessage,
  PokemonCard,
  //PowerType,
  Stage,
  State,
  //StateUtils,
  StoreLike,
  //SuperType,
  //TrainerCard,
  //TrainerEffect,
  //TrainerType,
  //WhoBeginsEffect,
} from '@ptcg/common';

export class Cresselia extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Cresselia';

  public fullName: string = 'Cresselia sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/021/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.PSYCHIC];

  public hp: number = 120;
  public weakness = [{ type: CardType.ANY }];

  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];
  public retreat = [CardType.COLORLESS];

  public attacks = [
    {
      name: 'Pirouette Apaisante',
      cost: [CardType.PSYCHIC],
      damage: '',
      text: 'Soignez 20 dégâts de chacun de vos Pokémon.',
    },
    {
      name: 'Nettoyage Falciforme',
      cost: [CardType.PSYCHIC,CardType.PSYCHIC,CardType.PSYCHIC],
      damage: '80+',
      text: 'Vous pouvez retourner l\'une de vos cartes Récompense (actuellement face cachée). Dans ce cas, cette attaque inflige 80 dégâts supplémentaires. (Cette carte Récompense reste face découverte pour le reste de la partie.)',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
