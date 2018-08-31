# Used to create a JS variable containing all the runes

import os
from pathlib import Path

def main():
    directory = "images/runes"
    runes = list(Path(directory).rglob("Rune*.png"))

    for index, rune in enumerate(runes):
        rune_name = os.path.basename(rune).replace("_", " ").replace(".png", "")
        rune_weight = rune_name.split("(")[1].split(")")[0]
        rune_name = rreplace(rune_name.split("(")[0], " ", "", 1)

        category = "simple"
        if "Rune Pa" in rune_name:
            category = "Pa"
        elif "Rune Ra" in rune_name:
            category = "Ra"

        line = '{ label: "' + rune_name + \
            '", category: "Runes de type ' + category + \
            '", icon: "images/runes/' + os.path.basename(rune) + \
            '", weight: "' + rune_weight + '"}'

        if len(runes) != index + 1:
            line += ","

        print(line)


def rreplace(s, old, new, occurrence):
    li = s.rsplit(old, occurrence)
    return new.join(li)


if __name__ == "__main__":
    main()