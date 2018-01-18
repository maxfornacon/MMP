# Coinhive Funktionsübersicht

## Captcha
Coinhive bietet eine Möglichkeit der Spamregulierung, mit einer eigenen Captcha-Variante. Bekannt ist dieses Prinzip von den meisten Websites, die sich dadurch vor Spam schützen. So muss sich ein Nutzer bevor er eine Eingabe abschickt häufig als echter Mensch verifizieren. So muss er z.B. eine Zeichenfolge ablesen und eintippen oder Bilder sortieren, oder einfach nur ein Häkchen setzen und ein Algorithmus prüft im Hintergund ob wirklich eine Person vor dem Rechner sitzt.

Coinhive verfolgt für ihre Captcha-Variante das sogenannte "Proof Of Work Principle". So wird ein Coinminer gestartet, wenn man den Haken setzt, der dann eine vordefinierte Anzahl Hashes berechnet. Das benötigt Zeit und Rechenleistung, was die Seite für Spammer unattraktiv macht.

## Link Forwarding
Um eine lange URL zu kürzen, um sie z.B in einem Forum oder Tweet zu veröffentlichen, wo nur eine begrenzte Anzahl an Zeichen zur Verfügung steht, kann man einen sogenannten Shortlinkservice benutzen. Coinhive kürzt die URLs und leitet sie über eine eigene Seite weiter, wo ein Coinminer gestartet wird und der Nutzer erst auf die eigentliche Zielseite gleitet wird wenn eine bestimmte Anzahl Hashes berechnet wurde. So ist es möglich für den Linkbetreiber Geld zu verdienen.

## JavaScript Miner
Coinhive bietet die Möglichkeit einen JavaScript Miner im Hintergund einer Webseite laufen zu lassen, den der Websitebetreiber frei konfigurieren kann.      
Folgende Parameter können eingestellt werden:
* Anzahl der CPU-Threads, die für die Berechnungen zur Verfügung stehen
* Wert der Threaddrosselung
* Ob das AutoThreads-Feature, zur optimalen Nutzung der Rechenleistung, aktiviert werden soll

### HTTP API
Coinhive bietet mit einer eingenen API eine Möglichket den Coinminer besser in eine Webapplikation einzubinden. So ist es z.B. möglich die Hashrate für Nutzeraccounts auszulesen und diese in besondere Leistungen umzuwandeln, wie z.B eine imaginäre Währung, oder Werbefreie Zeit.

Die API sollte dabei ausschließlich serverseitig (z.B.: PHP, Ruby on Rails, NodeJS, etc.) verwendet werden, da sonst sensible Informationen preisgegeben werden können.
