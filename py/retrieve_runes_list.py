# Used to create a JS variable containing all the runes

import os
from pathlib import Path

directory = "images/runes"
runes = list(Path(directory).rglob("rune_*.png"))

for rune in runes:
    rune_name = os.path.basename(rune).replace("_", " ").replace(".png", "")
    
    category = "simple"
    if "Rune Pa" in rune_name:
        category = "Pa"
    elif "Rune Ra" in rune_name:
        category = "Ra"

    line = '{ label: "' + rune_name + \
           '", category: "Runes de type ' + category + \
           '", icon: "images/runes/' + os.path.basename(rune) + '"},'

    print(line)