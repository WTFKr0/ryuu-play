#!/bin/bash

i=1
while [ $i -le 1025 ]; do
	echo "## $i"
	if [ ! -f jsons/species/$i.json ]; then
		#curl -sL https://pokeapi.co/api/v2/pokemon-species/$i | jq '.' > jsons/species/$i.json
		curl -sL http://localhost:8000/api/v2/pokemon-species/$i/ | jq '.' > jsons/species/$i.json
	fi
	let i=$i+1
done
