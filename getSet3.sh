#!/bin/bash

if [ "$1" == "list" ]; then
	curl -sfL "https://api.tcgdex.net/v2/fr/sets" | jq '.'
	exit 0
fi

function typeJS {
	t="$1"
	if [ "$t" == "Incolore" ]; then
		echo "COLORLESS"
	elif [ "$t" == "Plante" ]; then
		echo "GRASS"
	elif [ "$t" == "Combat" ]; then
		echo "FIGHTING"
	elif [ "$t" == "Psy" ]; then
		echo "PSYCHIC"
	elif [ "$t" == "Eau" ]; then
		echo "WATER"
	elif [ "$t" == "Électrique" ]; then
		echo "LIGHTNING"
	elif [ "$t" == "Métal" ]; then
		echo "METAL"
	elif [ "$t" == "Obscurité" ]; then
		echo "DARK"
	elif [ "$t" == "Feu" ]; then
		echo "FIRE"
	elif [ "$t" == "Dragon" ]; then
		echo "DRAGON"
	elif [ "$t" == "Fée" ]; then
		echo "FAIRY"
	elif [ "$t" == "ANY" ]; then
		echo "ANY"
	fi
}

setlist=""

cardlist="
# sv01 : SVI : Écarlate et Violet
sv01;80
sv01;83
sv01;144
sv01;153
sv01;171
sv01;175
sv01;180
sv01;181

# sv02 : PAL : Évolutions à Paldea
sv02;74
sv02;75
sv02;76
sv02;95
sv02;96
sv02;151
sv02;164
sv02;167
sv02;168
sv02;170
sv02;261

# sv03 : OBF : Flammes Obsidiennes
sv03;143
sv03;148
sv03;149
sv03;152
sv03;155
sv03;165
sv03;185

# sv04 : PAR : Faille Paradoxe
sv04;74
sv04;148
sv04;173
sv04;182

# sv05 : TEF : Forces Temporelles
sv05;39
sv05;40
sv05;41
sv05;62
sv05;112
sv05;128
sv05;129
sv05;138
sv05;139
sv05;150

# sv06 : TWM : Mascarade Crépusculaire
sv06;56
sv06;57
sv06;79
sv06;91
sv06;144
sv06;161

# sv06.5 : SFA : Fable Nébuleuse
sv06.5;15
sv06.5;16
sv06.5;18
sv06.5;19
sv06.5;20
sv06.5;21
sv06.5;41
sv06.5;42
sv06.5;43
sv06.5;51
sv06.5;52
sv06.5;53
sv06.5;54
sv06.5;56
sv06.5;61
sv06.5;63
sv06.5;64

# sv08 : SSP : Étincelles Déferlantes
sv08;81
sv08;129

# swsh1 : SWSH1 : Épée et Bouclier
swsh1;165

# swsh4 : SWSH4 : Voltage Éclatant
swsh4;112

# swsh9 : BRS : Stars Étincelantes
swsh9;53
swsh9;56

# swsh10 : ASR : Astres Radieux
swsh10;29
swsh10;43
swsh10;44
swsh10;89
swsh10;90
swsh10;149

# swsh12 : SIT : Tempête Argentée
swsh12;151

# swsh12.5 : CRZ : Zénith Suprême
swsh12.5;67
swsh12.5;92
swsh12.5;152
swsh12.5;153
swsh12.5;154
swsh12.5;155
swsh12.5;156
swsh12.5;157
swsh12.5;158
swsh12.5;159

# det1 : DPK : Détective Pikachu
det1;9
"

## Create base index
echo "export * as frSets from './fr';" > packages/sets/src/index.ts

sets=$(echo "$cardlist" | grep -v "^$" | grep -v "^#" | awk -F";" '{print $1}' | sort | uniq)
>packages/sets/src/fr/index.ts

mkdir -p .cache

for s in $sets; do
	echo "## $s"
	setjsname=$(echo "$s" | sed "s/\./_/g")
	# Init index
	mkdir -p packages/sets/src/fr/$setjsname
	echo "export * from './$setjsname';" >> packages/sets/src/fr/index.ts
	indexsetfile1=/tmp/indexsetfile1-$$-$s.js
	echo "import { Card } from '@ptcg/common';" > $indexsetfile1
	indexsetfile2=/tmp/indexsetfile2-$$-$s.js
	echo "export const set$setjsname: Card[] = [" > $indexsetfile2
	cards=$(echo "$cardlist" | grep "^$s;" | awk -F";" '{print $2}')
	for i in $cards; do
		echo
		echo "### Set $s - Card $i"
		nb=$(printf "%03d" $i)
		# Get card
		if [ ! -f .cache/$s-$i.json ]; then
			curl -sfL "https://api.tcgdex.net/v2/fr/sets/$s/$i" > .cache/$s-$i.json
		fi
		cardjson=$(cat .cache/$s-$i.json)
		#echo "$cardjson" | jq '.'
		category=$(echo "$cardjson" | jq -r '.category')
		image=$(echo "$cardjson" | jq -r '.image')/high.jpg
		name=$(echo "$cardjson" | jq -r '.name')
		echo "category: $category"
		echo "image: $image"
		echo "name: $name"
		uniquename=$(echo "$name" | sed "s/[ '-]/_/g")
		echo "uniquename: $uniquename"
        filename=$(echo "${name,,}" |  sed "s/[ ']/-/g")
		echo "filename: $filename"
		name=$(echo "$name" | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
		echo "name2: $name"

		# Init file for card
		tmpfile=/tmp/getSet$$-$s-$i.js
		

		# Pokemon card
		if [ "$category" == "Pokémon" ]; then
			nbabilities=$(echo "$cardjson" | jq -r '.abilities | length')
			if [ "$nbabilities" -eq 0 ]; then
				commentPT="//"
			else
				commentPT=""
			fi

			cat <<EOF >$tmpfile
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
  ${commentPT}PowerType,
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

EOF

			hp=$(echo "$cardjson" | jq -r '.hp')
			nbtypes=$(echo "$cardjson" | jq -r '.types | length')
			if [ $nbtypes -ne 1 ]; then
				echo "Multiple types ?"
				echo "$cardjson" | jq '.'
				exit 3
			fi
			poketype=$(echo "$cardjson" | jq -r '.types[0]')
			retreat=$(echo "$cardjson" | jq -r '.retreat')
			nbweaknesses=$(echo "$cardjson" | jq -r '.weaknesses | length')
			if [ $nbweaknesses -eq 0 ]; then
				weaknesstype="ANY"
	            weaknessmult="ANY"
            elif [ $nbweaknesses -ne 1 ]; then
				echo "Multiple weaknesses ?"
	            echo "$cardjson" | jq '.'
	            exit 3
			else
				weaknesstype=$(echo "$cardjson" | jq -r '.weaknesses[0].type')
				weaknessmult=$(echo "$cardjson" | jq -r '.weaknesses[0].value')
	        fi
			stage=$(echo "$cardjson" | jq -r '.stage')
			if [ "$stage" != "De Base" ]; then
				evolveFrom=$(echo "$cardjson" | jq -r '.evolveFrom')
				[ "$evolveFrom" == "null" ] && evolveFrom="TODO_ELVOLVE"
			fi
			
			echo "hp: $hp"
			echo "type: $poketype"
			echo "retreat: $retreat"
			echo "weakness: $weaknesstype $weaknessmult"
			echo "stage: $stage"
			[ "$stage" != "De Base" ] && echo "evolveFrom: $evolveFrom"

			# Feed tmpfile
			echo "export class $uniquename extends PokemonCard {" >> $tmpfile
			echo >> $tmpfile
			echo "  public set: string = '$s';" >> $tmpfile
			echo >> $tmpfile
			echo "  public name: string = '$name';" >> $tmpfile
			echo >> $tmpfile
			echo "  public fullName: string = '$name $s';" >> $tmpfile
			echo >> $tmpfile
			echo "  public imageUrl: string = '$image';" >> $tmpfile
			echo >> $tmpfile
			if [ "$stage" == "De base" ]; then
				echo "  public stage: Stage = Stage.BASIC;" >> $tmpfile
			elif [ "$stage" == "Niveau 1" ]; then
			       echo "  public stage: Stage = Stage.STAGE_1;" >> $tmpfile
				   echo "  public evolvesFrom = '$evolveFrom';" >> $tmpfile
			elif [ "$stage" == "Niveau 2" ]; then
			       echo "  public stage: Stage = Stage.STAGE_2;" >> $tmpfile
				   echo "  public evolvesFrom = '$evolveFrom';" >> $tmpfile
			else
				echo "Unkonwn stage : $stage !!"
				exit 3
			fi
			echo >> $tmpfile
			poketypejs=`typeJS "$poketype"`
			[ -z "$poketypejs" ] && echo "Type $poketype inconnu !" && exit 3
			echo "  public cardTypes: CardType[] = [CardType.$poketypejs];" >> $tmpfile
			echo >> $tmpfile
			echo "  public hp: number = $hp;" >> $tmpfile
			echo >> $tmpfile
			weaknesstypejs=`typeJS "$weaknesstype"`
			[ -z "$weaknesstypejs" ] && echo "Type $weaknesstype inconnu !" && exit 3
			echo "  public weakness = [{ type: CardType.$weaknesstypejs }];" >> $tmpfile

			echo >> $tmpfile
			echo "  public resistance = [
    {
      type: CardType.ANY,
      value: -30,
    },
  ];" >>$tmpfile
			echo >> $tmpfile

  			## RETREAT
			retreatjs=""
			ir=0
			while [ $ir -lt $retreat ]; do
				retreatjs="${retreatjs}CardType.COLORLESS,"
				let ir=$ir+1
			done
			retreatjs=$(echo "$retreatjs" | sed "s/,$//g")
            echo "  public retreat = [$retreatjs];" >> $tmpfile
			echo >> $tmpfile
	
			# Abilities
			abilities="$nbabilities found"
			echo "abilities: $abilities"
			if [ $nbabilities -gt 0 ]; then
				echo >> $tmpfile
				echo "  public powers = [" >> $tmpfile
				ia=0
				while [ $ia -lt $nbabilities ]; do
					abtype=$(echo "$cardjson" | jq --argjson id $ia -r '.abilities[$id].type')
					abname=$(echo "$cardjson" | jq --argjson id $ia -r '.abilities[$id].name' | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
					abeffect=$(echo "$cardjson" | jq --argjson id $ia -r '.abilities[$id].effect' | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
					[ "$abeffect" == "null" ] && abeffect=""
					echo "    {" >> $tmpfile
					echo "      name: '$abname'," >> $tmpfile
					echo "      powerType: PowerType.POKEPOWER," >> $tmpfile
					echo "      text: '$abeffect'," >> $tmpfile
					echo "    }," >> $tmpfile
					let ia=$ia+1
				done
				echo "  ];" >> $tmpfile
			fi
			echo >> $tmpfile

			# Attacks
			nbattacks=$(echo "$cardjson" | jq -r '.attacks | length')
			attacks="$nbattacks found"
			echo "attacks: $attacks"
			if [ $nbattacks -gt 0 ]; then
                                echo "  public attacks = [" >> $tmpfile
                                ia=0
                                while [ $ia -lt $nbattacks ]; do
                                        atcost=$(echo "$cardjson" | jq --argjson id $ia -r '.attacks[$id].cost[]')
                                        atname=$(echo "$cardjson" | jq --argjson id $ia -r '.attacks[$id].name' | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
                                        ateffect=$(echo "$cardjson" | jq --argjson id $ia -r '.attacks[$id].effect' | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
										[ "$ateffect" == "null" ] && ateffect=""
                                        atdamage=$(echo "$cardjson" | jq --argjson id $ia -r '.attacks[$id].damage')
										[ "$atdamage" == "null" ] && atdamage=""
                                        echo "    {" >> $tmpfile
                                        echo "      name: '$atname'," >> $tmpfile
					costjs=""
					for t in $(echo "$cardjson" | jq --argjson id $ia -r '.attacks[$id].cost[]'); do
						atttypejs=`typeJS "$t"`
						[ -z "$atttypejs" ] && echo "Type $t inconnu !" && exit 3
						costjs="${costjs}CardType.$atttypejs,"
					done
					costjs=$(echo "$costjs" | sed "s/,$//g")
					# TODO transform types
                                        echo "      cost: [$costjs]," >> $tmpfile
                                        echo "      damage: '$atdamage'," >> $tmpfile
                                        echo "      text: '$ateffect'," >> $tmpfile
                                        echo "    }," >> $tmpfile
                                        let ia=$ia+1
                                done
                                echo "  ];" >> $tmpfile
                        fi

			echo >> $tmpfile
			echo "  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }" >> $tmpfile
		
		## Trainers
		elif [ "$category" == "Dresseur" ]; then
			cat <<EOF >$tmpfile
import {
  Effect,
  //GameError,
  //GameMessage,
  State,
  StoreLike,
  TrainerCard,
  //TrainerEffect,
  TrainerType,
} from '@ptcg/common';

EOF

			# Get values
			trainertype=$(echo "$cardjson" | jq -r '.trainerType')
			if [ "$trainertype" == "Objet" ]; then
				trainertype="ITEM"
			elif [ "$trainertype" == "Supporter" ]; then
				trainertype="SUPPORTER"
			elif [ "$trainertype" == "Outil" ]; then
				trainertype="TOOL"
			elif [ "$trainertype" == "Stade" ]; then
				trainertype="STADIUM"
			else
	#      = 0,
    #SUPPORTER = 1,
    #STADIUM = 2,
    # = 3
				echo "TrainerType $trainertype not found !"
				exit 3
			fi
			effect=$(echo "$cardjson" | jq -r '.effect' | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
			echo "trainertype: $trainertype"
			echo "effect: $effect"
			# Feed tmpfile
			echo "export class $uniquename extends TrainerCard {" >> $tmpfile
			echo >> $tmpfile
			echo "  public trainerType: TrainerType = TrainerType.$trainertype;" >> $tmpfile
			echo >> $tmpfile
			echo "  public set: string = '$s';" >> $tmpfile
			echo >> $tmpfile
			echo "  public name: string = '$name';" >> $tmpfile
			echo >> $tmpfile
			echo "  public fullName: string = '$name $s';" >> $tmpfile
			echo >> $tmpfile
			echo "  public imageUrl: string = '$image';" >> $tmpfile
			echo >> $tmpfile
			echo "  public text: string = '$effect';" >> $tmpfile
			echo >> $tmpfile

			echo >> $tmpfile
			echo "  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    return state;
  }" >> $tmpfile
			
		## Energies
		elif [ "$category" == "Énergie" ]; then
			cat <<EOF >$tmpfile
import {
  CardType,
  EnergyCard,
  EnergyType,
} from '@ptcg/common';

EOF

			# Get values
			energyType=$(echo "$cardjson" | jq -r '.energyType')
			if [ "$energyType" == "De base" ]; then
				energyType="BASIC"
			elif [ "$energyType" == "Spécial" ]; then
				energyType="SPECIAL"
			else
	#      = 0,
    #SUPPORTER = 1,
    #STADIUM = 2,
    # = 3
				echo "energyType $energyType not found !"
				exit 3
			fi

			energyT=$(echo "$name" | sed "s/^Énergie //g")
			energyTjs=`typeJS "$energyT"`
			if [ -z "$energyTjs" ]; then
				if [ "$energyT" == "Médicale" ]; then
					energyTjs="COLORLESS"
				else
					echo "Type $energyT inconnu !" && exit 3
				fi
			fi
			effect=$(echo "$cardjson" | jq -r '.effect' | sed "s/'/\\\\'/g" | tr '\n' ' ' | sed "s/ *$//g")
			[ "$effect" == "null" ] && effect=""

			echo "energyTjs: $energyTjs"
			echo "effect: $effect"
			# Feed tmpfile
			echo "export class $uniquename extends EnergyCard {" >> $tmpfile
			echo >> $tmpfile
			echo "  public provides: CardType[] = [CardType.$energyTjs];" >> $tmpfile
			echo >> $tmpfile
			echo "  public energyType = EnergyType.$energyType;" >> $tmpfile
			echo >> $tmpfile
			echo "  public set: string = '$s';" >> $tmpfile
			echo >> $tmpfile
			echo "  public name: string = '$name';" >> $tmpfile
			echo >> $tmpfile
			echo "  public fullName: string = '$name $s';" >> $tmpfile
			echo >> $tmpfile
			echo "  public imageUrl: string = '$image';" >> $tmpfile
			echo >> $tmpfile
			echo "  public text: string = '$effect';" >> $tmpfile
			echo >> $tmpfile

#			echo >> $tmpfile
#			echo "  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
#    return state;
#  }" >> $tmpfile
		
		else
			echo "Category $category not managed !"
			exit 2
		fi

		echo "}" >> $tmpfile

		#cat $tmpfile
		if [ -f packages/sets/src/fr/$setjsname/$filename.ts ]; then
			echo "File packages/sets/src/fr/$setjsname/$filename.ts already exists, we do nothing !"
		else
			mv $tmpfile packages/sets/src/fr/$setjsname/$filename.ts
		fi
		rm -f $tmpfile

		# Edit indexset
		echo "import { $uniquename } from './$filename';" >> $indexsetfile1
		echo "  new $uniquename()," >> $indexsetfile2

		[ $i -eq 2 ] && break
		let i=$i+1
	done
	echo "];" >> $indexsetfile2
	# Write indexset
	cat $indexsetfile1 > packages/sets/src/fr/$setjsname/index.ts
	echo >> packages/sets/src/fr/$setjsname/index.ts
	cat $indexsetfile2 >> packages/sets/src/fr/$setjsname/index.ts
	rm -f $indexsetfile1 $indexsetfile2
done

exit 0

if [ $# -ne 1 ]; then
	echo "Usage: $0 <setname>"
	echo "Ex:    $0 Écarlate_et_Violet_Fable_Nébuleuse"
	exit 2
fi

urlsetname=$1

# Get some infos
res=$(curl -sL "https://www.pokepedia.fr/$urlsetname")
setname=$(echo "$res" | grep -A2 "Abréviation" | tail -1 | sed 's/<td>//g')
nbcards=$(echo "$res" | grep "001.*/[0-9]" | awk -F "/" '{print $2}' | sed 's/<//g' | sed "s/^0*//g")

echo "urlsetname: $urlsetname"
echo "setname: $setname"
echo "nbcards: $nbcards"
echo

i=5
while [ $i -le $nbcards ]; do
	nb=$(printf "%03d" $i)
	echo "## $nb"
	# Get link of card
	linelink=$(echo "$res" | grep "_$nb)\"")
	## <td><a href="/Statitik_(%C3%89carlate_et_Violet_Fable_N%C3%A9buleuse_001)" title="Statitik (Écarlate et Violet Fable Nébuleuse 001)">Statitik</a>
	cardname=$(echo "$linelink" | awk -F">" '{print $3}' | awk -F "<" '{print $1}')
	link=$(echo "$linelink" | awk -F"\"" '{print $2}')
	echo "cardname: $cardname"

	# Get card info now
	res2=$(curl -sL "https://www.pokepedia.fr${link}")
	poktype=$(echo "$res2" | grep -A2 "/Type_(JCC)" | tail -1 | awk -F"\"" '{print $6}')
	pokpv=$(echo "$res2" | grep -A2 "/PV" | tail -1 | awk -F">" '{print $2}')
	pokniv=$(echo "$res2" | grep -A2 "Niveau d'évolution" | tail -1 | awk -F">" '{print $2}')
	pokfaib=$(echo "$res2" | grep -A2 "/Faiblesse" | tail -1 | awk -F"\"" '{print $6}')
	pokres=$(echo "$res2" | grep -A2 "/R%C3%A9sistance" | tail -1 | awk -F">" '{print $2}')
	pokret=$(echo "$res2" | grep -A2 "/Co%C3%BBt_de_Retraite" | tail -1 | sed "s/title=\"/\n___/g" | grep "^___" | awk -F"\"" '{print $1}' | sed "s/^___//g" | paste -sd ",")

	echo "poktype: $poktype"
	echo "pokpv: $pokpv"
	echo "pokniv: $pokniv"
	echo "pokfaib: $pokfaib"
	echo "pokres: $pokres"
	echo "pokret: $pokret"

	# Parsing attaques
	## cat res2.tmp | xq | grep -C50 "Réserve de Plumes"
	attaquesxml=$(echo "$res2" | sibxq | sed '0,/id="Attaques"/d' | sed '0,/                 <table /d' | sed '/                  <\/table>/q' | head -n -1)
	nbatt=$(echo "$attaquesxml" | xq '.tbody.tr|length/2')

	j=0
	while [ $j -lt $nbatt ]; do
		echo "## ATT $j"
		let id=$j*2
		let id2=$id+1
		echo "### section 1"
		atttype=$(echo "$attaquesxml" | xq -r --argjson id $id '.tbody.tr[$id].th[0].span.a["@title"]')
		attname=$(echo "$attaquesxml" | xq -r --argjson id $id '.tbody.tr[$id].th[1]')
		attdegats=$(echo "$attaquesxml" | xq -r --argjson id $id '.tbody.tr[$id].th[2]["#text"]')
		[ "$attdegats" == "null" ] && attdegats=""
		echo "attname: $attname"
		echo "atttype: $atttype"
		echo "attdegats: $attdegats"
		echo "### section 2"
		echo "$attaquesxml" | xq --argjson id2 $id2 '.tbody.tr[$id2]'
		let j=$j+1
	done

	exit
	OLDIFS="$IFS"
	IFS="
"
	for att in $(echo "$attaquesxml" | grep "^                        <th>" | awk -F">" '{print $2}'); do
		echo "# att: $att"
		attxml=$(echo "$attaquesxml" | sed "s/^                        <th>$att/##############/g" | sed '0,/^##############/d' | sed '/^                        <th>/q')
		#echo "$attxml"
		degats=$(echo "$attxml" | grep '<th width="50">' | awk -F">" '{print $2}' | awk -F"<" '{print $1}')
		echo "degats: $degats"
		echo "$attxml"
	done
	IFS="$OLDIFS"

	echo


	let i=$i+1
	break
	[ $i -eq 5 ] && break
done	

exit 2

mkdir -p packages/sets/src/fr/$setname

echo "export * from './SFA';" > packages/sets/src/fr/index.ts

tmpindex1=/tmp/tmpindex1.$$.tmp
tmpindex2=/tmp/tmpindex2.$$.tmp

cat <<EOF >$tmpindex1
import { Card } from '@ptcg/common';
EOF
cat <<EOF >$tmpindex2

export const set$setname: Card[] = [
EOF

curl -s -H "Accept-Language: fr-FR" "https://www.pokecardex.com/series/$setname" \
  | grep "assets/images/sets.*alt=\"" \
  | sed 's#.* alt="\([A-Za-z -][A-Za-z -]* [0-9][0-9]*\)/[0-9].*#\1#g' | while read l; do
	echo "$l"
  	setid=$(echo "$l" | awk '{print $NF}')
  	name=$(echo "$l" | sed "s/ $setid$//g")
	name="$name $setid"
	uniquename=$(echo "$name" | sed "s/[ -]/_/g")
	filename=$(echo "${name,,}" |  sed "s/ /-/g")
	echo "Name: $name / Id: $setid"
	cat newCardTpl.js | sed -e "s/{{POKEMON_UNIQUE_NAME}}/$uniquename/g" -e "s/{{POKEMON_NAME}}/$name/g" -e "s/{{POKEMON_SET}}/$setname/g" -e "s/{{POKEMON_SETID}}/$setid/g" > "packages/sets/src/fr/$setname/$filename.ts"
	echo "import { $uniquename } from './$filename';" >> $tmpindex1
	echo "  new $uniquename()," >> $tmpindex2
	#break
done

echo "];" >> $tmpindex2
cat $tmpindex1 $tmpindex2 > packages/sets/src/fr/$setname/index.ts
rm -f $tmpindex1 $tmpindex2
