# LeBronifier

LeBronifier is a web app that transforms a word into a 'LeWord', where the prefix 'Le' is appended to the beginning of an input word. This project was inspired by my glorious king and sunshine, LeBron James.

**Please Note:** This project is a joke and should not be taken seriously.

![LeBronifier](/public/screenshot.png)

## Algorithm

* If the first or second letter is 'o', append 'LeBr' accordingly
    * e.g. 'Optimal' -> 'LeBroptimal', 'Toronto' -> 'LeBronto'
* If the first letter is 'i', replace it with 'Le' and capitalize the third letter
    * e.g. 'Iconic' -> 'LeConic'
* If the first letter is 'e', append 'L' and capitalize the third letter
    * e.g. 'Ethereal' -> 'LeThereal'
* Else, append 'Le' to the beginning of the word
    * e.g. 'Sunshine' -> 'LeSunshine'

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.