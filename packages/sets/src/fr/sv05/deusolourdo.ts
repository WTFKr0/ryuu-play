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

export class Deusolourdo extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Deusolourdo';

  public fullName: string = 'Deusolourdo sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/129/high.jpg';

  public stage: Stage = Stage.STAGE_1;
  public evolvesFrom = 'Insolourdo';

  public cardTypes: CardType[] = [CardType.COLORLESS];

  public hp: number = 140;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public powers = [
    {
      name: 'Pioche Fuyante',
      powerType: PowerType.POKEPOWER,
      text: 'Une fois pendant votre tour, vous pouvez piocher 3 cartes. Si vous piochez au moins une carte de cette façon, mélangez avec votre deck ce Pokémon et toutes les cartes qui lui sont attachées.',
    },
  ];

  public attacks = [
    {
      name: 'Écras\'Terre',
      cost: [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS],
      damage: '90',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
