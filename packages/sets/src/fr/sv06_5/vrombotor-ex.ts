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

export class Vrombotor_ex extends PokemonCard {

  public set: string = 'sv06.5';

  public name: string = 'Vrombotor-ex';

  public fullName: string = 'Vrombotor-ex sv06.5';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv06.5/015/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = '';

  public cardTypes: CardType[] = [CardType.LIGHTNING];

  public hp: number = 280;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS];


  public attacks = [
    {
      name: 'Flash Accélérateur',
      cost: [CardType.METAL],
      damage: '20+',
      text: 'Si ce Pokémon a été déplacé de votre Banc vers le Poste Actif pendant ce tour, cette attaque inflige 120 dégâts supplémentaires.',
    },
    {
      name: 'Vitesse Fracassante',
      cost: [CardType.METAL,CardType.METAL,CardType.METAL],
      damage: '250',
      text: 'Défaussez ce Pokémon et toutes les cartes qui lui sont attachées.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
