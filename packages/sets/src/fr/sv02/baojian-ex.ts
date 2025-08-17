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

export class Baojian_ex extends PokemonCard {

  public set: string = 'sv02';

  public name: string = 'Baojian-ex';

  public fullName: string = 'Baojian-ex sv02';

  public imageUrl: string = 'https://assets.tcgdex.net/fr/sv/sv02/261/high.jpg';

  public stage: Stage = Stage.BASIC;

  public cardTypes: CardType[] = [CardType.WATER];

  public hp: number = 220;

  public weakness = [{ type: CardType.METAL }];

  public retreat = [CardType.COLORLESS,CardType.COLORLESS];


  public powers = [
    {
      name: 'Frisson Glacé',
      powerType: PowerType.POKEPOWER,
      text: 'Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez chercher dans votre deck jusqu\'à 2 cartes Énergie {W} de base, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck.',
    },
  ];

  public attacks = [
    {
      name: 'Lame Grêle',
      cost: [CardType.WATER,CardType.WATER],
      damage: '60×',
      text: 'Vous pouvez défausser autant d\'Énergies {W} que vous le voulez de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.',
    },
  ];

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }
}
