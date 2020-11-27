# Used to download all the runes from dofus
# format : runes/<category>/rune_<name>_(<weight>).png

from libs.EzWebScraping import EzWebScraping
from bs4 import BeautifulSoup
import requests
import shutil
import os


def main():
    web = EzWebScraping()
    web.connect("https://www.dofus.com/fr/mmorpg/encyclopedie/ressources?type_id%5B%5D=78&object_level_min=1&object_level_max=200&size=96")

    scraper = BeautifulSoup(web.get_html_page(), "html.parser")

    result_list = scraper.find("table", class_="ak-table ak-responsivetable").find("tbody").find_all("tr")

    runes_path = "images/runes/"
    if not os.path.exists(runes_path):
        os.makedirs(runes_path)

    for index, tr_container in enumerate(result_list):
        rune_image = get_rune_image_link(tr_container)
        rune_name = get_rune_name(tr_container)
        rune_weight = get_rune_weight(rune_name)
        destination = runes_path + rune_name + " (" + str(rune_weight) + ").png"
        print("(" + str(index+1) + "/" + str(len(result_list)) + ") Downloading " + rune_name + " to " + destination + " from " + rune_image)
        download_image(rune_image, destination)

def get_rune_image_link(tr_container):
    try:
        link = tr_container.find_all("td")[0].find("img")["src"]
        return link.replace("/ng/img/../../../dofus", "")
    except expression as identifier:
        print("Failed with container :")
        print(tr_container)
        return None


def get_rune_name(tr_container):
    try:
        return tr_container.find_all("td")[1].find("a").text
    except expression as identifier:
        print("Failed with container :")
        print(tr_container)
        return None


def download_image(source, destination):
    r = requests.get(source, stream=True)
    if r.status_code == 200:
        with open(destination, 'wb') as f:
            r.raw.decode_content = True
            shutil.copyfileobj(r.raw, f)
    else:
        print("Failed : " + str(r.status_code))


def get_rune_weight(rune_name):
    runes_weight = [
        [1, ["Fo", "Ine", "Cha", "Age", "Ini", "Vi"]],
        [2, ["Puit", "Ré Terre", "Ré Feu", "Ré Eau", "Ré Air", "Ré Neutre", "Ré Pou", "Ré Cri", "Pi Per"]],
        [2.5, ["Pod"]],
        [3, ["Sa", "Prospe"]],
        [4, ["Tac", "Fui"]],
        [5, ["Do Terre", "Do Feu", "Do Eau", "Do Air", "Do Neutre", "Do Pou", "Do Cri", "Pi"]],
        [6, ["Ré Per Terre", "Ré Per Feu", "Ré Per Eau", "Ré Per Air", "Ré Per Neutre"]],
        [7, ["Ré Pa", "Ré Pme", "Ret Pa", "Ret Pme"]],
        [10, ["So", "Cri", "Do Ren"]],
        [15, ["Do Per Mé", "Do Per Di", "Do Per Ar", "Do Per So", "Ré Per Mé", "Ré Per Di"]],
        [20, ["Do"]],
        [30, ["Invo"]],
        [51, ["Po"]],
        [90, ["Ga Pme"]],
        [100, ["Ga Pa"]]
    ]

    weight = -1
    max_len = -1
    for rune_weight in runes_weight:
        # Used to prevent "Do Per So" to be taken as "So"
        if(contains(rune_name, rune_weight[1]) and len(rune_weight[1]) > max_len):
            weight = rune_weight[0] * get_rune_multiplicator(rune_name)
            max_len = len(rune_weight[1])
    return weight


def contains(target, lst):
    for item in lst:
        if item in target:
            return True
    return False


def get_rune_multiplicator(rune_name):
    if "Rune Pa" in rune_name:
        return 3
    if "Rune Ra" in rune_name:
        return 10
    return 1

if __name__ == "__main__":
    main()