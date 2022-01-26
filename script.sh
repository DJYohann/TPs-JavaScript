#!/bin/bash

# Description du script
doc() {
cat << EOF
Script de création pour TP

$0 -h ou -help
$0 numero-tp nom 
EOF
}

# Fonction d'utilisation
usage() {
	doc ; exit 0
}

# Fonction erreur
error() {
	printf "Erreur : %s\nAide : bash %s -help\n" "$1" "$0" >&2 ; exit 1
}

# Appel fonction d'aide
if [ "$1" = "-h" ] || [ "$1" = "-help" ]; then
	usage;
fi

# Vérification du nombre d'arguments
if [ $# -eq 0 ]; then
	error "Arguments nécessaires"
fi

if [ $# -ne 2 ]; then
	error "Arguments invalides"
fi

# Création de la structure des TPs
createStructure() {
	rep="tp$1-$2"

	mkdir -p "$rep"/{public/{css,img,js},test/{css,img,js},view}

	touch "$rep"/view/index.html

cat << EOF > "$rep"/view/index.html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>$rep</title>
</head>
<body>

</body>
</html>
EOF
}

createStructure "$1" "$2";