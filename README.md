<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/vzdrizhni/RPG-game">
    <img src="src/assets/microverse.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Javascript / Capstone --> [RPG-game]</h3>

  <p align="center">
    This project is the Capstone of the Microverse curriculum at the end of the Ruby on Rails module!
    <br />
    <a href="https://github.com/vzdrizhni/RPG-game"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/vzdrizhni/RPG-game/issues">Report Bug</a>
    ·
    <a href="https://github.com/vzdrizhni/RPG-game/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Installation](#installation)
* [Database Structure](#database-structure)
* [Live Demo and Presentation](#live-demo-and-presentation)
* [Contributors](#contributors)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project

This is the Capstone project that signs the completion of the Javascript module in Microverse Curriculum.
It is a browser game where users can play an orc and collect stars earning points in a limited period of time.
After a minute passed round ends and scoreboard displayed on a page.

![screenshot-1](src/assets/titleScreen.PNG)

![screenshot-1](src/assets/screenshot.PNG)

<!-- INSTALLATION -->
## Installation

To have this app on your pc, you need to:
* have Ruby & Ruby on Rails installed in your computer
* [download](https://github.com/vzdrizhni/RPG-game/archive/development.zip) or clone this repo:
  - Clone with SSH:
  ```
    git@github.com:vzdrizhni/RPG-game.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/vzdrizhni/RPG-game.git
  ```
* and open the terminal inside the repo and run the bundler
  - ```$ bundler install --without production```
* then, run rails db:migrate && rails db:seed. This creates the database with the corresponding tables, columns and associations and will populate the database with mockup content
  - ```$ rails db:migrate```
* and finally, you can test it in the console by running
  - ```$ rails server``` and using ```localhost:3000``` into your browser address bar to start using it

  ## Rspec testing

* Run the command and see the output:
```$ bundle exec rspec```
![Rspec](app/assets/images/rspec.PNG)

## Database Structure
 * Database schema used for this project reflects the following structure:
 ![erd](app/assets/images/erd.png)

### Built With
This project was built using these technologies.
* Ruby & Ruby on Rails
* Rspec / Capybara
* Bootstrap
* HTML / CSS / SCSS
* SQLite
* Rubocop
* GithubActions :muscle:
* Atom

<!-- Live Demo -->
## Live Demo and Walkthrough Video
* Live Demo Link: - Heroku Deployment - [RPG-game](https://fathomless-atoll-13027.herokuapp.com/articles) :point_left:
## WalkThrough Video:
https://www.loom.com/share/a4b5d729b10a4f88ac7e8365e81e2444
## Potential future features
- Add fully working weather API
- Extend the Authorisation feature
- Improve the front-end

<!-- CONTACT -->
## Contributors

👤 **Roman Nikolaev**

- LinkedIn: [Nikolaev Roman](https://www.linkedin.com/in/roman-nikolaev-65b639197/)
- GitHub: [@vzdrizhni](https://github.com/vzdrizhni)
- E-mail: vzdrizhni@gmail.com


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Microverse](https://www.microverse.org/)
* [Ruby Documentation](https://www.ruby-lang.org/en/documentation/)
* [Ruby on Rails](https://rubyonrails.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Behance](https://www.behance.net/)
* [Heroku](https://www.heroku.com/)

## Credits
* Nelson Sakwa - [liFEstIye](https://www.behance.net/gallery/14554909/liFEsTlye-Mobile-version)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/vzdrizhni/RPG-game.svg?style=flat-square
[contributors-url]: https://github.com/vzdrizhni/RPG-game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/vzdrizhni/RPG-game.svg?style=flat-square
[forks-url]: https://github.com/vzdrizhni/RPG-game/network/members
[stars-shield]: https://img.shields.io/github/stars/vzdrizhni/RPG-game.svg?style=flat-square
[stars-url]: https://github.com/vzdrizhni/RPG-game/stargazers
[issues-shield]: https://img.shields.io/github/issues/vzdrizhni/RPG-game.svg?style=flat-square
[issues-url]: https://github.com/vzdrizhni/RPG-game/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
