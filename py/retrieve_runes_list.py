import os
from pathlib import Path

directory = "images/runes"
runes = list(Path(directory).rglob("rune_*.png"))

for rune in runes:
    rune_name = os.path.basename(rune).replace("_", " ").replace(".png", "")
    
    category = "simple"
    if "rune pa" in rune_name:
        category = "pa"
    elif "rune ra" in rune_name:
        category = "ra"

    line = '{ label: "' + rune_name + \
           '", category: "Runes de type ' + category + \
           '", icon: "/images/runes/' + category + "/" + os.path.basename(rune) + '"},'

    print(line)