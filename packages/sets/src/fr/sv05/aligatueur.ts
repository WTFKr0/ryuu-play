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
  PowerType,
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

export class Aligatueur extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Aligatueur';

  public fullName: string = 'Aligatueur sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/041/high.jpg';

  public stage: Stage = Stage.STAGE_2;
  public evolvesFrom = 'Crocrodil';

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 180;

  public weakness = [{ type: CardType.LIGHTNING }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public powers = [
    {
      name: 'Cœur Torrentiel',
      powerType: PowerType.POKEPOWER,
      text: 'Une fois pendant votre tour, vous pouvez placer 5 marqueurs de dégâts sur ce Pokémon. Dans ce cas, pendant ce tour, les attaques utilisées par ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).',
    },
  ];

  public attacks = [
    {
      name: 'Vague Géante',
      cost: [CardType.WATER,CardType.WATER],
      damage: '160',
      text: 'Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Vague Géante.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
