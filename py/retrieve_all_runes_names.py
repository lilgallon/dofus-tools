import os
from pathlib import Path

directory = "images/runes"
runes = list(Path(directory).rglob("rune_*.png"))

for rune in runes:
    print("\"" +
          os.path.basename(rune).replace("_", " ").replace(".png", "") +
          "\",")