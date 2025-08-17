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

export class Épine_de_Fer extends PokemonCard {

  public set: string = 'sv05';

  public name: string = 'Épine-de-Fer';

  public fullName: string = 'Épine-de-Fer sv05';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv05/062/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.LIGHTNING];

  public hp: number = 140;

  public weakness = [{ type: CardType.FIGHTING }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS,CardType.COLORLESS];


  public attacks = [
    {
      name: 'Destructo-Pression',
      cost: [CardType.LIGHTNING,CardType.COLORLESS],
      damage: '70×',
      text: 'Montrez les 5 cartes du dessus de votre deck. Cette attaque inflige 70 dégâts pour chaque carte Temps futur que vous y trouvez. Défaussez ensuite ces cartes Temps futur et mélangez les autres cartes avec votre deck.',
    },
    {
      name: 'Lasso Titanesque',
      cost: [CardType.LIGHTNING,CardType.LIGHTNING,CardType.LIGHTNING,CardType.COLORLESS],
      damage: '140',
      text: '',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
