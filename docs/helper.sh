#!/usr/bin/env bash

# filename: helper.sh
# author: @trdthg

showHelp() {
	cat <<EOF
Usage: ./helper.sh -h

-h, -help,          --help                  Display help

-v, -version,  		--version          		Set and Download specific version of EspoCRM

					--po2md               	gen md

					--md2po               	gen/update po

					--fix               	fix md format with autocorrect

-V, -verbose,       --verbose               Run script in verbose mode. Will print out each step of execution.

EOF
}

export version=0
export verbose=0

# $@ is all command line parameters passed to the script.
# -o is for short options like -v
# -l is for long options with double dash like --version
# the comma separates different long options
# -a is for long options with single dash like -version
options=$(
	getopt \
		-l "help,version,verbose:,md2po,po2md,dryrun,fix" \
		-o "hvV:df" \
		-a -- "$@"
)

# set --:
# If no arguments follow this option, then the positional parameters are unset. Otherwise, the positional parameters
# are set to the arguments, even if some of them begin with a ‘-’.
eval set -- "$options"

PO2MD="${PO2MD:=po2md}"
MD2PO="${MD2PO:=md2po}"
AUTOCORRECT="${AUTOCORRECT:=autocorrect}"

check_cmd() {
	$1 -v >/dev/null 2>&1 || {
		echo "$1"
		echo >&2 "$1 not found, Aborting."
		exit 1
	}
}

while true; do
	case "$1" in
	-h | --help)
		showHelp
		exit 0
		;;
	-v | --version)
		showHelp
		;;
	-V | --verbose)
		export verbose=1
		set -xv # Set xtrace and verbose mode.
		;;
	--po2md)
		check_cmd "$PO2MD"
		shopt -s globstar nullglob
		cd "./zh" || exit
		for lang in "en"; do
			for file in find ./**/*.md; do
				final_path="../$lang/$file"
				folder_path="$(dirname "$final_path")"
				mkdir -p "$folder_path"
				$PO2MD "$file" -p "../po/$lang.po" --wrapwidth 0 --quiet --save "$final_path"
			done
		done
		;;
	--md2po)
		check_cmd "$MD2PO"
		shopt -s globstar nullglob
		cd "./zh" || exit
		for lang in "en"; do
			$MD2PO ./**/*.md --quiet --save --po-filepath ../po/$lang.po
		done
		;;
	--fix)
		for file in find ./zh/**/*.md; do
			check_cmd "$AUTOCORRECT"
			autocorrect --fix "$file"
		done
		;;
	--)
		shift
		break
		;;
	esac
	shift
done
